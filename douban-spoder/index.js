const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
// 请求top250
// 浏览器输入一个url get
https.get('https://movie.douban.com/top250', function(res){
    // console.log(res);
    // 分段返回 自己拼接
    let html = '';
    res.on('data',function(chunk) {
        html += chunk;
    })
    // document.querySelector
    // li 下面的item
    res.on('end', function(){
        // console.log(html);
        const $ = cheerio.load(html);
        let allFiles = [];
        // 空格
        $('li .item').each(function(){
            // this指向循环时当前电影，当前电影的title
            // this.querySelector
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            console.log(title, star, pic);
            // 存 数据库
            // 存成一个  json文件  fs
            // coonsole.log(title, star, pic)
            allFiles.push({
                title, star, pic
            })
            
        })
        fs.writeFile('./files.json', JSON.stringify(allFiles), function(err){
            if (!err) {
                console.log('文件写入完毕')
            }
        })
        // 下载图片
        downloadImage(allFiles);
    })
})
function downloadImage(allFiles){
    for (let i = 0; i < allFiles.length; i++){
        const pucUrl = allFiles[i].pic;
        https.get(pucUrl, function(res){
            res.setEncoding('binary');
            let str = '';
            res.on('data', function(chunk){
                str += chunk;
            })
            res.on('end', function() {
                fs.writeFile(`./images/${i}.png`, str,'binary', function(err) {
                    // console.log(err);
                    if(!err) {
                        console.log(`第${i}张图片下载成功`)
                    }
                })
            })
        })
    }
}