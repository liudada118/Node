const puppeteer = require('puppeteer');

// 没有界面的浏览器，人操作不了
// 代码命令我们浏览器执行某某行为
// 代码：一劳永逸
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/');
    // await page.pdf({ path: 'hn.pdf', format: 'A4' });
    let input = await page.$('#kw');
    await input.focus();
    await page.keyboard.type('大众点评');
    let btn = await page.$('#su');
    await btn.click();
    // 内容不会立马出来
    setTimeout(async()=>{
        await page.pdf({ path: 'hn.pdf', format: 'A4' });
        await browser.close();
    },2000)

})();