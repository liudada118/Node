let htmlStr = `<html>
  <head></head>
  <body>
    <img a="a" b="b"/>
    <span></span>
    <div class="cls" id="myid"></div>
  </body>
</html>`
let currentToken = null;
let currentAttribute = null;
let stack = [ { type: 'document', children: [] } ];
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  if (token.type === 'startTag') {
    // push pop 处理配对
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    stack.push(element);
    // 作为栈顶的元素子节点，为了生成树
    // if (!top.children) top.children = [];
    top.children.push(element);
  } else if (token.type === 'endTag') {
    if (token.tagName !== top.tagName) {
      throw new Error('tagname match error')
    } else {
      stack.pop();
    }
  } else if (token.type === 'selfCloseToken') {
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    top.children.push(element);
  }
  currentToken = null;
}
function parse(htmlString) {
  state = start;
  for (let c of htmlString) {
    state = state(c);
  }
}
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  // <html>: html tag 由 a-zA-Z  div span p 
  // </html>
  //  h t m l
  // console.log(c);
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken.tagName += c;
    return tagName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttaibuteName
  } else if (c === '>') {
    // tag 拼接结束
    emit(currentToken);
    return start
  }
}
function beforeAttaibuteName(c) {
  if (c === '/') {
    currentToken.type = 'selfCloseToken';
    return tagName;
  } else if (c.match(/[a-zA-Z]/)) {
    currentAttribute = {
      name: c,
      value: ''
    }
    return attributeName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttaibuteName
  } else if (c === '>') {
    return tagName(c);
  }
}
function attributeName(c) {
  // class="cls"
  // ""
  if (c.match(/[a-zA-Z]/)) {
    currentAttribute.name += c;
    return attributeName;
  } else if (c === '=') {
    return attributeValue;
  }
}
function attributeValue(c) {
  // <div class="cls" id="myid" a="b"></div>
  if (c === '\"') {
    // nothing
    return attributeValue;
  } else if (c.match(/[a-zA-Z]/)) {
    currentAttribute.value += c;
    return attributeValue;
  } else {
    // 空格 >
    // 消耗了
    if (!currentToken.attributes) currentToken.attributes = [];
    currentToken.attributes.push(currentAttribute);
    currentAttribute = null;
    // 代理
    // 本状态内部处理完毕了这个 c，下一个状态也要针对 c 处理
    // 本状态内部处理完毕了这个 c，下一个状态处理到的字符就是 c 的后一个 字符
    return beforeAttaibuteName(c);
  }
}
function endTagOpen(c) {
  // </html>
  if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName;
  }
}