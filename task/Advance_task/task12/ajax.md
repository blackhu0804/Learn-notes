## 题目1： ajax 是什么？有什么作用？

> ajax:异步的JavaScript与XML技术(Asynchronous JavaScript and XML)，指的是一套综合了多项技术的浏览器端网页开发技术。ajax可以与服务器交换数据并更新部分网页而不重新加载整个页面。

使用Ajax的最大优点，就是能在不更新整个页面的前提下维护数据。这使得Web应用程序更为迅捷地回应用户动作，并避免了在网络上发送那些没有改变的信息。Ajax应用可以仅向服务器发送并取回必须的数据，并在客户端采用JavaScript处理来自服务器的回应。因为在服务器和浏览器之间交换的数据大量减少。服务器回应更快了，同时，很多的处理工作可以在发出请求的客户端机器上完成，因此Web服务器的负荷也减少了。

## 题目2： 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？

- 前后端的一些约定
    - 接口名称，统一命名，定制规范
    - 数据类型一致
    - 数据提交方式 get/post
- 如何mock数据
    - 搭建node.js环境，使用server-mock模拟前后端数据传输

## 题目3：点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?

```js
        var isDataArrive = true

        btn.addEventListener('click',function(e){
            e.preventDefault();//阻止a链接跳转到底部
            
            if(!isDataArrive){ //当网速慢时，数据还没有获取到，防止用户重复点击
                return ;
            }

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200 || xhr.status === 304){
                        var result = JSON.parse(xhr.responseText)
                        console.log(result);

                        var fragment = document.createDocumentFragment()
                        for(var i = 0;i < result.length;i++){
                            var node =document.createElement('li')
                            node.innerText = result[i]
                            fragment.appendChild(node);
                        }
                        ct.appendChild(fragment)

                        pageIndex += 5
                    }else {
                        console.log('出错了')
                    }  
                    isDataArrive = true
                } 
            }
            xhr.open('get','loadMore?index='+pageIndex+'&length=5',true);
            xhr.send();
            isDataArrive = false

        })
```

## 题目4：实现加载更多的功能，[效果范例](http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/1.htmlss)，后端在本地使用server-mock来模拟数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #ct li{
            list-style: none;
            border: 1px solid #ccc;
            padding: 10px;
            margin-top: 10px;
            cursor: pointer;
        }
        #load-more {
            display: block;
            margin: 10px auto;
            cursor: pointer;
        }
        .btn{
            height: 40px;
            line-height: 40px;
            width: 80px;
            border: 1px solid #e27272;
            border-radius: 3px;
            text-align: center;
            text-decoration: none;
            color: #e27272;
        }
        .btn:hover {
            background-color: greenyellow;
            color: #fff;
        }
    </style>
</head>
<body>
    <ul id="ct">

    </ul>
    <a class="btn" href="#" id="load-more">加载更多</a>


    <script>
        var ct = document.querySelector('#ct')
        var btn = document.querySelector('#load-more')
        var pageIndex = 0

        var isDataArrive = true


        btn.addEventListener('click',function(e){
            e.preventDefault();//阻止a链接跳转到底部
            
            if(!isDataArrive){ //当网速慢时，数据还没有获取到，防止用户重复点击
                return ;
            }

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200 || xhr.status === 304){
                        var result = JSON.parse(xhr.responseText)
                        console.log(result);

                        var fragment = document.createDocumentFragment()
                        for(var i = 0;i < result.length;i++){
                            var node =document.createElement('li')
                            node.innerText = result[i]
                            fragment.appendChild(node);
                        }
                        ct.appendChild(fragment)

                        pageIndex += 5
                    }else {
                        console.log('出错了')
                    }  
                    isDataArrive = true
                } 
            }
            xhr.open('get','loadMore?index='+pageIndex+'&length=5',true);
            xhr.send();
            isDataArrive = false

        })
    </script>
</body>
</html>
```

后端代码：
```js
app.get('/loadMore',function(req,res){
    var curIdx = req.query.index
    var len = req.query.length
    var data = []

    for(var i = 0;i < len;i++){
        data.push('新闻' + (parseInt(curIdx) + i))
    }

    res.send(data);
})
```