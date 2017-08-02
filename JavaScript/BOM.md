# BOM  浏览器对象模型（BrowserObjectModel）

## 常见属性

- Window.history
```js
window.history.back();     // 等同于点击浏览器的回退按钮
window.history.go(-1);     //等同于history.back();
window.history.forward();  //前进
window.history.go(1);      //等同于history.forward();
```
- window.location
```js
//跳转到一个新页面
window.location.assign("http://www.mozilla.org"); // or
window.location = "http://www.mozilla.org";
//强制从服务器重新加载当前页面
window.location.reload(true);
//协议
location.protocol
//域名
location.hostname
//端口
location.port
//域名和端口号
location.host
//路径
location.pathname
//?...(键值)
location.search
//#...(fragment)
location.hash
//协议域名端口号
location.arigin
```

- window.name
- window.navigator
```js
//返回当前浏览器的user agent字符串.
navigator.userAgent
```
- window.screen.availHeight
- window.open(url,windowName,windowFeatures)
```js
        btn1.onclick = function() {
        //在当前窗口打开
	window.open('http://www.baidu.com','_self')

        //新窗口打开
	//window.open('http://www.baidu.com','_blank')

        //打开一个固定宽度窗口
        //let f = 'width=400px,height=300px'
        //widow.open('http://baidu.com','_blank',f);

	}
```