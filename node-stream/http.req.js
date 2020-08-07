const http = require('http');
const fs = require('fs')

http.createServer((req, res) =>{
    // get
    // juejin.com/serch?type=all&query=js
    // 后端会 接受
    // 前端type=all&query=js 当做流的方式传过来 后端
    // console.log(req);
    // 头部： content-type
    // 
    // get: 数据放到url
    // post： 数据放到body
    // http://localhost:8088/?serch?type=all&query=js
    const writeStream = fs.createWriteStream('./params.txt');
    req.pipe(writeStream);
    res.end('ok');
})
.listen(8088, () => {
    console.log('8088');
})