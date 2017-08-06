# jquery

## ready
```js
1. $( document ).ready(  )
2. $().ready(  ) (this is not recommended)
3. $( )
```

## 选择器 

### $()

$('#container')获取的对象和document.querySelector('#container')获取的对象不相同

如何相互转化？

```js
$('#container')[]   //转化为原生对象
$(document.querySelector('#container'))     //转化为jquery对象
```

[选择器api](http://www.jquery123.com/category/selectors/)
[选择器](http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JQuery/%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0.html)

## DOM操作

### 创建元素

只需要把DOM字符串传入`$`方法即可返回一个jQuery对象

```js
var obj = $('<div class="test"><p><span>Done</span></p></div>');
```

### 添加元素  

- .append(content[,content]) / .append(function(index,html))
- .appendTo(target)
- .prepend(content[,content]) / .prepend(function(index,html))
- .before([content][,content]) / .before(function)
- .insertBefore(target)
- .after([content][,content]) / .after(function（index）)

```js
	$(function(){
		var li = $('<li>li4</li>')
		var li0 = $('<li>li0</li>')
		li.appendTo($('#container .wrap'))
		//$('#container .wrap').append(li)
		$('#container .wrap').prepend(li0)

		li.before('<li>li5</li>') //放到li4的前面
		li.after('<li>li6</li>')	//放到li4的后面
		$('<li>insertBefore</li>').insertBefore($('#container .wrap')) //放到ul前面
	})
```

### 删除元素

- .remove([selector])
    - 删除被选元素（及其子元素）
- .empty()
    - 清空被选择元素内所有子元素，自己存在
- .detach()
    - .detach() 方法和.remove()一样, 除了 .detach()保存所有jQuery数据和被移走的元素相关联。当需要移走一个元素，不久又将该元素插入DOM时，这种方法很有用。

### 包裹元素

- .wrap(wrappingElement) / .wrap(function(index))
- .wrapAll(wrappingElement)
- .wrapAll(wrappingElement)
- .unwap()

### html([string])

这是一个读写两用的方法，用于获取/修改元素的`innerHTML`

1. 当没有传递参数的时候，返回元素的innerHTML
2. 当传递了一个string参数的时候，修改元素的innerHTML为参数值
```js
$('div').html()

$('div').html('123')
```

### text()

和`html`方法类似，操作的是DOM的`innerText`值

[DOM操作](http://www.jquery123.com/category/manipulation/)

[DOM操作2](http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JQuery/DOM%E6%93%8D%E4%BD%9C.html)