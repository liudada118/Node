// async await
const fs = require('fs')
const promise1 = new Promise((resolve,reject) =>{
    fs.readFile('./package.json',(err,info)=>{
        resolve(info);
    })
});
const promise2 = (info) => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./p.json', info ,(err) => {
            if(!err) {
                resolve();
            }
        })
    })
}
const promise3 = (time) => { 
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve();
    },time)
})
}
//  写法上同步，执行起来依然异步
// then 链式调用
promise1
.then((info) => {
    // 返回promise
    return promise2(info);
})
.then(()=>{
    // 等着 前面这个 promise
    console.log('读写完成')
    return promise3(2000)
})
.then(()=>{
    console.log('ok then')
})
async function run() {
    // await 紧接一个promise 那么后面的代码就会等待，等promise resolve才会执行
    // async+await 替代了。then
    let info = await promise1 //promise1 info === resolve 
    await promise2(info);
    await promise3(3000);
    console.log('okasync');
    // ....
}
run();