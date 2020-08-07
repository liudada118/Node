//源端口号 目的地端口号
const net = require('net');//node对传输层的封装

class XmlHttpRequest {
    constructor() {
        this.method = null;
        this.url = null;
        this.headers = null;
        this.body = null;
        this.resStatusLine =null;
        this.resHeaders = null;
        this.response =null

    }
    open(method, url) {
        this.method = method;
        this.url = url;
    }
    setHeader(headers) {
        this.headers = headers;
    }
    parse(string) {
        // 解析
        const lines = string.split('\r\n');
        console.log(lines);
        this.resStatusLine = lines[0];
        this.statusCode = this.resStatusLine.split(' ')[1]
        this.resHeaders = lines.slice(1,lines.length-2);
        this.response = lines[lines.length-1];

    }
    send(body) {
        this.body =body;
        const client = net.createConnection({port:8088, host:'127.0.0.1'},() =>{
            client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`);
            client.end();
        })
        client.on('data', (chunk) => {
            // 玩具浏览器
            // 服务端返回给浏览器的 也是一个原始的http报文
            // 解析报文
            console.log('receive:', JSON.stringify(chunk.toString()));
            this.parse(chunk.toString())
            // 运行这里数据加载完毕，再来调用外面添加的onload方法
            this.onload();
        });
        client.on('end', () => {
            console.log('disconnect');
        })
    }
}
// ajax
const xhr = new XmlHttpRequest();
xhr.open("POST","/");
xhr.setHeader({
    'Content-Type':'application/json'
})
// 回调： 数据加载回来
// 给xhr添加了一个onload方法
xhr.onload = function() {
    console.log('接收到响应了')
    console.log(xhr.statusCode)
    console.log(xhr.response)
    console.log(xhr.resHeaders)
}
xhr.send(JSON.stringify({a:1}))

// const client = net.createConnection({port:8088, host:'127.0.0.1'},() =>{
//     let json = JSON.stringify({a:1});
//     client.write('POST / HTTP/1.1\r\n');
//     client.write('HOST: 127.0.0.1\r\n');
//     client.write('Content-Type: application/json\r\n');
//     client.write('\r\n');
//     client.write(json)
//     client.write('\r\n');
// })
// client.on('data', (data) =>{
//     console.log('receive', data.toString());
//     client.end();
// })
// client.on('end', () => {
//     console.log('disconnect');
// })