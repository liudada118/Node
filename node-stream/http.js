const https = require('https');
const fs = require('fs');
https.get('https://movie.douban.com/top250', function(res) {
//   console.log(res);// 继承了流 流  可读流 提供数据的那一方
//   html html 保存为 本地 douban.html
//   不是流的话，会一次性接收到所有的数据， 一次性交给我们
//   分段返回：
const writeStream = fs.createWriteStream('.douban.html');
    res.pipe(writeStream)
});

https.get('https://img.zcool.cn/community/01a7bf573ec6166ac7253f9ac97445.png@1280w_1l_2o_100sh.png',function(res){
    const writeStream = fs.createWriteStream('./p1.png');
    res.pipe(writeStream)
})
// https.createServer((req, res) => {

// })