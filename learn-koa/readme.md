tencent 腾讯 南非

基石？ c语言
c++,js, go,java,python

基石？腾讯？做一个网络虚拟传呼机
QQ 连接一切 即时通信 TCP/IP 协议

HTTP  TCP/IP  UDP  WebSocket

能力增长点

- koa node web 开发框架
    7天后 blog网站


    背后的基石是什么？
    koa  加速了 node web 开发  一个web服务就是一个web app
    koa 在 3000端口提供了http协议访问，
    https://127.0.0.1:3000   图解HTTP协议

    http.createServer()
    http node内置模块  createSever
    koa封装了它

    http 协议本质是干嘛的？
    ctx context 上下文环境（request response）
    http 协议 诞生于1991年， 用于传输学术论文的。
    采用基于请求（ctx.request）响应（ctx.response）的模式，在网络间传输html超文本的内容  HTTP
    超文本的内容  HTTP/0.9  1991年

    - HTTP（web server应用层协议）基于tcp（transport control protocol）协议
        TCP协议 负责用户 移动或电信 运营商 动态IP，网站 阿里云（IP） 传输 html 
    ▪ 应用层    http协议
    ▪ 表示层
    ▪ 会话层
    ▪ 传输层    TCP协议
    ▪ 网络层
    ▪ 数据链路层
    ▪ 物理层
    - 建立连接后会发送一个get请求的行（request method get url）的信息
    GET / template.html
    - 服务器接收到请求信息后， 读取对应的HTML文件， 并将数据以ASC 返回给用户浏览器
    - 断开连接

- http  res+req可以完成一次请求？
HTTP协议 基于请求应答模型 1991年  传输是最简单的html文本
ctx.req ctx.res 
a href  req  url  res  
a href
背后的程序在做什么
- req和res 之间是什么关系？
    n:1 res想象成一个服务器 req是请求对象，有很多个   HTTP有何关系
    n 非常大 会高并发，卡   node 很优秀 ，天生适合高并发（异步）
    createServer  I/O file  数据库
    php（同步 阻塞） pyhon
    GO   多核计算

    http 网络通信协议 TCP/IP  7层
    流动 node流
    建立一个通信管道（传输控制协议），stream
    GET / 请求行
    返回请求后 关闭 断开连接，  HTTP 可以服务于更多的用户
    释放服务器的内存

    带宽 100mb/s
    req res 请求对象  响应对象
- writeHead 在做什么事情？

head 在HTTP 是什么

img图片不能显示怎么办