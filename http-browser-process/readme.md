## req
浏览器：xhr fetch
node: http.get

不同的apixxx -> http -> 这里都一样

http:超文本传输
```js
const xhr = new XMLhttprequest();
xhr.setheader('Content-Type':'application/json');
xhr.open('POST','api.com', true);
xhr.send({a:1,b:2})
```

浏览器拼接报文
  基于报文传输http1.1（纯文本）
  - 首行（请求行）
  - 首部
  - -r-n
  - 实体

## 解析报文
split('\r\n');

限制：必须等到拿到一个完整的报文
现实：报文传输，可以允许我们，分段传输

### 解析
FSM（finate, state, machine）
infinity: 正无穷 负无穷 除法

浏览器解析报文：body(html) headers, 响应行
html怎么让渲染出来了？ 浏览器也需要解析html
js 怎么就被执行？ 浏览器 也要解析 js
解析成什么？

## 编译原理

代码都是字符串
- 词法分析（分词）

- 语法分析

- 生成中间代码

- 生成目标代码


DOM 树 AST抽象语法书