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

## 事件

在1.7之前的版本中jQuery处理事件有多个方法，作用各不相同，后来统一的使用`on/off`方法

### 绑定移除事件
- .on( events [,selector ] [,data ], handler(eventObject) )
- .off( events [, selector ] [, handler ] )
```html
	<div class="box">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	</div>

	<input type="text" id="ipt"	>
	<button id="btn">添加</button>
	<div id="wrap">
		
	</div>

<script>
	$('.box>ul').on('click', 'li',function(){
		var str = $(this).text()
		$('#wrap').text(str)
	})
		
	$('.box>ul').on('click.hello', 'li',{name:"suyu"},function(e){
		console.log(e.data.name)
	})
	$('#btn').on('click',function(){
		var value = $('#ipt').val()
		$('.box>ul').append('<li>' + value +'</li>')
	})

	$('.box>ul').off('click.hello')
</script>
```

### .trigger( eventType [, extraParameters ] )

```js
//根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为
$('#foo').on('click', function() {
  alert($(this).text());
});
$('#foo').trigger('click');
```

- [事件api](http://www.jquery123.com/category/events/)

## 属性CSS操作

### .val([value])
```js
$('input').val()//获取input的值

$('input').val('newValue');//改变input的值
```

### .attr()

```js
<input type="text" value="hello">

$('input').attr('type')		//text
```

### removeattr()

## CSS相关

- .css(propertyName) / .css(propertyNames)
- .css(propertyName,value) / .css( propertyName, function(index, value) ) / .css( propertiesJson )

```html
	<div class="box"></div>

	<script>
	$('.box').css({height: '30px', 'border': '1px solid red'})
	</script>
```

- .addClass(className) / .removeClass(className)

为元素添加class，不是覆盖原class，是追加，也不会检查重复
```js
$( "p" ).addClass( "myClass yourClass" );
$( "p" ).removeClass( "myClass yourClass" );
```

- .hasClass(className)

检查元素是否包含某个class，返回true/false

```js
$( "#mydiv" ).hasClass( "foo" )
```

- .toggleClass(className)

toggle是切换的意思，方法用于切换
```js
		$('.box').on('click',function(){
			$('.box').toggleClass('active')
		})
```

[CSS](http://www.jquery123.com/category/css/)

## [动画](http://www.jquery123.com/category/effects/)

### 自定义

.animate( properties [, duration ] [, easing ] [, complete ] )
```html
	<div class="box" style="position: relative;background-color: red;width: 50px;height: 50px;"></div>
	<button id="btn">变化</button>
	<script>
	$('#btn').on('click',function(){
		// $('.box').animate({width:80,height:80,left:0,top:0},1000)
		// 					.animate({width:60,height:60,left:100},1000)
		// 					.animate({left:0},1000)

		var actions = [
			{width:80,height:80,left:0,top:0},
			{width:60,height:60,left:100},
			{top:100},
			{left:0},
			{top:0}
		]

		actions.forEach(function(action,index){
			$('.box').animate(action,500)
		})
	})	
	</script>
```