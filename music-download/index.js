const process = require('process')
const axios = require('axios')
const inquirer = require('inquirer')
const http = require('http')
const fs = require('fs')
process.title = 'node music';
// console.log(process.argv);


// 异步 请求不会立马回来
function requset() {
    let keywords = process.argv[2]
    return axios({
        method: 'GET',
        url: 'http://neteasecloudmusicapi.zhaoboy.com/',
        params: {
            keywords
        }
    })
    .then(res => {
        // console.log(res);
        // return res.data;
        // 在promise then回调里面 返回内容 在后面链式调用 then 就可以继续取到返回的内容
        return res.data;
    })
}
// 异步 上下 移动
function choose(songs) {
    // value inquirer 选择唯一标识（配置到value）
    // inquirer 要求每项都是
    return inquirer.prompt([

        {
            type: "List",
            name: 'songs',
            message: `共有${songs.length}首，请回车选择`,
            choices: songs.map(song => {
                return {
                    name: song.name,
                    value: song.id
                }
            })
        }
    ])
        .then(c => {
            const id = c.songs;
            return id
        })
}

requset()
    .then(res => {
        // console.log(songs);
        return choose(res.result.songs)
    })
    .then(id => {
        axios({
            url: 'http://neteasecloudmusicapi.zhaoboy.com/song/url',
            params: {
                id
            }
        })
        .then(res => {
            let url = res.data.data[0].url
            return url
        })
        .then(url => {
            if(!url){
                console,log('没有找到歌曲')
            }
        console.log('获取到url', url, '开始下载...')
        http.get(url, (res) => {
                res.pipe(fs.createWriteStream(`./${id}.mp3`))
                res.on('end', () => {
                    console.log('下载完毕')
            })
        })
    })
})
    