const fs = require('fs');

function copy(sourceUrl, destUrl) {
//     fs.readFile(sourceUrl,(err, info) => {
//         if(!err) {
//             fs.writeFile(destUrl, info, (err) => {
//                 if(!err) {
//                     console.log('拷贝完成');
//                 }
//             })
//         }
//     })
// }
// 源头
// 流： 基础类 Stream
// 可读流
// 可写流
// 转换流
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createReadStream(destUrl)
    readStream.pipe(writeStream);
}
// // 不用流：
// // 读完一个文件得到内容 info 变量放到我们内存里面 把写到某个地方
// // 区别
// 前端：
// 我 baidu.com -> HTMLAllCollection,css,js 浏览器-> 我看到   我卡  我自己卡
// 小王 baidu.com -> HTMLAllCollection,css,js 浏览器-> 小王看到
// 小李 baidu.com -> HTMLAllCollection,css,js 浏览器-> 小李看到
// 浏览器执行 js ,浏览器申请内存 浏览器在各自的电脑上运行   天然就是分布式的  (集中 中心化)

// 高并发
// 后端  baidu.com 一台服务器（linux电脑）要处理 我 小王 小李 很多人的请求
// 内存多 baidu.com 卡 所有人都卡
copy('./readme.md', './copy.md')