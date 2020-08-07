const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        // origin
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*', //允许所有访问
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
        'Access-Control-Max-Age': -1,    // preflight 预检请求结果缓存的时间
        // 'Access-Control-Allow-Credentials': true  // 凭证 cookie,允许前端请求携带cookie,true Access-Control-Allow-Origin不能为* 
    })
    let posts = ['js', 'php']
    res.end(JSON.stringify(posts));
})
    .listen(9090, () => {
        console.log('9090')
    });