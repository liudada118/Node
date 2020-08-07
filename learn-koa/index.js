 //轻量级web开发框架，  js node 50%
const Koa = require('koa'); //请上koa
const app = new Koa();
const fs = require('fs');
// const func = ctx => {
//     console.log('func');
//     ctx.response.body = 'func';
// }
const main = ctx => {
    // console.log(ctx, '-------------');
    // ctx.response.body = 'hello world';
    ctx.response.type = 'html';
    // 分层， 网站 大一些的网站，  返回一个html文件（MVC  View）
    // const html = fs.readFileSync('./template.html', 'utf-8');
    fs.readFile('./template.html', 'utf-8',function(err, data) {
        console.log(data);
        data.onload = function(){
            
            ctx.response.body = data;
        }   
    })

    // ctx.response.body = html;
}
// app.use(func);
app.use(main);//启用了一个服务 给访问者request 用
app.listen(3000);