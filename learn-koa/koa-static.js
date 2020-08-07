const fs = require('fs');
const Koa = require('koa'); // web node 开发框架
const app = new Koa();
const KoaStatic = require('koa-static');
const main = ctx => {
    ctx.response.type = 'html'; // 响应头  png  css js
  //在服务器端 打开可读流， TCP 
    ctx.response.body = fs.createReadStream('./template.html');  
}
app.use(KoaStatic('./'));
app.use(main);
app.listen(5200)