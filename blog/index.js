const express = require('express');
const data = require('./db.json');
// koa 是 express的后代

const app = express();
// app.get是以get方法请求,请求谓语动词
app.get('/', function(req,res) {
    //api? res.end(JSON.stringfy(express))
    // Content-Type: application/json; charset=utf-8
    res.json(data);
})
// 设计一个url，访问第一篇文章
// restful:后端定义端口的标准   URL 暴露一个资源，
// url + http谓语动词 可以表达资源 对资源做什么操作
app.get('/posts/:id', function(req,res) { //:id代表动态id
    let id = req.params.id;
    let post = data.posts.filter(post => post.id ==id);
    res.json(post)
    // res.json(post[0].content)
    // id
    // data.posts id
})
// 添加一篇新文章， 设计url+动词
app.listen(8081);