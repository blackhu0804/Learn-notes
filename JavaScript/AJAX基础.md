# AJAX(async javascript and XML)

## 1. 浏览器可以发请求吗？有哪些方法？

- 在地址栏输入网址
- link css
- img src
- srcipt src
- from action

## 2. 基本构造

```js
var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看

  if(path === '/index.html'){
    response.setHeader('Content-Type','text/html;charset="utf-8"')
    response.end(`
      <!Doctype html>
      <h1>here is index.html</h1>
      <link rel="stylesheet" href="/style.css">
      <button id="btn">点我</button>
      <script src="/main.js"></script>
      `)
  } else if (path === '/style.css') {
    response.setHeader('Content-Type','text/css')
    response.end(`
      body 
        {color: red}
      `)
  } else if(path === '/main.js'){
    response.setHeader('Content-Type','text/javascript')
    response.end(`
      var b = document.getElementById('btn')
      b.onclick = function (){
        httpRequest = new XMLHttpRequest()  //初始化获取实例

        httpRequest.open('GET','/data')//设置GET路径

        httpRequest.onreadystatechange = function() { //onreadystatechange监听状态变化
          console.log(httpRequest.readyState)
          console.log('ready state 变了')
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) { //检测是否下载成功
              var string = httpRequest.responseText
              var object = JSON.parse(string)

              console.log('加载成功')  
              console.log(string)
              console.log(object)
              console.log(httpRequest.status)
            }else{
              console.log('失败')
              console.log(httpRequest.status)
            }
          }
        }
        httpRequest.send();
      }
      `)
  }else if(path === '/data') {
    response.end('{"name":"suyu","age":20}')
  }else {
    response.statusCode = 404
    response.end('Nothing')
  }
  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
```

## server Mock

