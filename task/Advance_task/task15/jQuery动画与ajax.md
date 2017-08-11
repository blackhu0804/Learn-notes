## 题目1： jQuery 中， $(document).ready()是什么意思？

当DOM准备就绪时，指定一个函数来执行。只要DOM结构已完全加载时，脚本就可以运行。传递处理函数给.ready()方法，能保证DOM准备好后就执行这个函数，因此，这里是进行所有其它事件绑定及运行其它 jQuery 代码的最佳地方。

下面两种语法全部是等价的:
- $(document).ready(handler)
- $(handler)

## 题目2： $node.html()和$node.text()的区别?

- $node.html():返回所选择元素内的html，包含HTML标签和文本内容
- $node.text()：返回所选择元素内的文本内容，不包含HTML标签

## 题目3： $.extend 的作用和用法? 

- jQuery.extend([deep,] target [, object1 ] [, objectN ] )

1. 当我们提供两个或多个对象给`$.extend()`，对象的所有属性都添加到目标对象（target参数）。

2. 如果只有一个参数提供给$`.extend()`，这意味着目标参数被省略。在这种情况下，jQuery对象本身被默认为目标对象。这样，我们可以在jQuery的命名空间下添加新的功能。这对于插件开发者希望向 jQuery 中添加新函数时是很有用的

目标对象（第一个参数）将被修改，并且将通过`$.extend()`返回。然而，如果我们想保留原对象，我们可以通过传递一个空对象作为目标对象：

```js
var object = $.extend({}, object1, object2);
```
在默认情况下，通过$.extend()合并操作不是递归的;

如果第一个对象的属性本身是一个对象或数组，那么它将完全用第二个对象相同的key重写一个属性。这些值不会被合并。如果将 true作为该函数的第一个参数，那么会在对象上进行递归的合并。

```js
    var obj1 = {a:1}
    var obj2 = {b:2,c:3}
    var obj3 = {b:3,d:5}

    $.extend(obj1,obj2)  //obj1 == {a:1,b:2,c:3}
    $.extend(obj1,obj2,obj3)  //obj1 == {a:1,b:3,c:3,d:5}
    var obj4 = $.extend({},obj1,obj2,obj3) //obj4 ==  {a:1,b:3,c:3,d:5}
```

## 题目4： jQuery 的链式调用是什么？

因为使用jquery方法时，所有对象的方法返回的都是对象本身，所以可以实现连续调用。

```js
$(this).addClass('active').siblings().removeClass('active')
//每一步都是返回的同一个对象
```

## 题目5： jQuery 中 data 函数的作用

- 在一个div上存取数据
```js
$("div").data("blah");  // undefined
$("div").data("blah", "hello");  // blah设置为hello
$("div").data("blah");  // hello
$("div").data("blah", 86);  // 设置为86
$("div").data("blah");  //  86
$("div").removeData("blah");  //移除blah
$("div").data("blah");  // undefined
```

- 在一个div上存取名/值对数据
```js
$("div").data("test", { first: 16, last: "pizza!" });
$("div").data("test").first  //16;
$("div").data("test").last  //pizza!;
```

- 在HTML5规范中div中读取预存的data-[key]值
```js
<div data-test="this is test" ></div>

$("div").data("test"); //this is test!;
```

## 题目6：写出以下功能对应的 jQuery 方法：

1. 给元素 $node 添加 class active，给元素 $noed 删除 class active
```js
$node.addClass('active')
$node.removeClass('active')
```

2. 展示元素$node, 隐藏元素$node
```js
$node.show()
$node.hide()
```

3. 获取元素$node 的 属性: id、src、title， 修改以上属性
```js
$node.attr('id')
$node.attr('id','name')

$node.attr('src')
$node.attr('src','test.img')

$node.attr('title')
$node.attr('title','标题')

```

4. 给$node 添加自定义属性data-src

```js
$node.attr('data-src','str')
```

5. 在$ct 内部最开头添加元素$node
```js
$ct.prepend($node)
```

6. 在$ct 内部最末尾添加元素$node
```js
$ct.append($node)
```

7. 删除$node
```js
$node.remove()
```

8. 把$ct里内容清空
```js
$ct.empty()
```

9. 在$ct 里设置 html   `<div class="btn"></div>`
```js
$ct.html('<div class="btn"></div>')
```

10. 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
```js
$node.width() //只包括内容，不包括margin、padding、border
$node.height() //只包括内容，不包括margin、padding、border

$node.innerWidth() //包括padding
$node.innerHeight() //包括padding

$node.outerWidth() //包括padding、border
$node.outerHeight() //包括padding、border

$node.outerWidth(true) //包括padding、border、margin
$node.outerHeight(true) //包括padding、border、margin
```

11. 获取窗口滚动条垂直滚动距离
```js
$(window).scrollTop()
```

12. 获取$node 到根节点水平、垂直偏移距离
```js
$node.offset().left
$node.offset().top
```

13. 修改$node 的样式，字体颜色设置红色，字体大小设置14px
```js
$node.css({"color":"red","font-size":"14px"})
```

14. 遍历节点，把每个节点里面的文本内容重复一遍
```js
$node.each(function(){
  console.log($(this).text())
})
```

15. 从$ct 里查找 class 为 .item的子元素
```js
$ct.find('.item')
```

16. 获取$ct 里面的所有孩子
```js
$ct.children()
```

17. 对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子
```js
$node.parent('.ct').children('.panel')
```

18. 获取选择元素的数量
```js
$node.length
```

19. 获取当前元素在兄弟中的排行

```js
$node.index()
```

## 题目7：用jQuery实现以下操作
- 当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色
- 当窗口滚动时，获取垂直滚动距离
- 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色
- 当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
- 当选择 select 后，获取用户选择的内容

[预览](http://js.jirengu.com/vegid/1/edit)

## 题目8：点击加载更多会加载数据展示到页面 

[页面效果](http://js.jirengu.com/fuqan/1/edit)

router.js
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