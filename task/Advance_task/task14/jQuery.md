## 题目1： jQuery 能做什么？

- 选择网页元素
- 改变结果集
- 元素的操作：取值和赋值
- 元素的操作：移动
- 元素的操作：复制、删除和创建
- 工具方法
- 事件操作
- 特殊效果
- AJAX

## 题目2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？

1. jquery选择器得到的jquery对象和标准的 javascript中的document.getElementById()取得的dom对象是两种不同的对象类型，两者不等价；jQuery对象是通过jQuery包装DOM对象后产生的对象
2. jQuery无法使用DOM对象的任何方法，同理DOM对象也不能使用jQuery里的方法

### jQuery对象转换成DOM原生对象：
    
1. 通过[index]方法
```js
var $div = $('div') //得到jq对象
var getDiv = $div[0]   //得到DOM原生对象
```
2. 通过get(index)的方法
```js
var $div = $('div') //得到jq对象
var getDiv = $div.get(0)    //得到Dom原生对象
```

### DOM原生对象转换成jQuery对象：
```js
document.getElementById(id)     //DOM对象
$(document.getElementById(id))     //jquery对象
```

## 题目3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？

1. bind(type,[data],fn)

> 为每个匹配元素的特定事件绑定事件处理函数。jQuery 3.0中已弃用此方法，请用 `on()`代替。

- type: 含有一个或多个事件类型的字符串，由空格分隔多个事件。比如"click"- 或"submit"，还可以是自定义事件名。
- data:作为event.data属性值传递给事件对象的额外数据对象
- fn:绑定到每个匹配元素的事件上面的处理函数

```js
function handler(event) {
  alert(event.data.foo);
}
$("p").bind("click", {foo: "bar"}, handler)
```

2. unbind(type,[data|fn]])

> bind()的反向操作，从每一个匹配的元素中删除绑定的事件。jQuery 3.0中已弃用此方法，请用 `off()`代替。如果没有参数，则删除所有绑定的事件

- type:删除元素的一个或多个事件,由空格分隔多个事件值。
- fn:要从每个匹配元素的事件中反绑定的事件处理函数

```js
//将段落的click事件取消绑定
$("p").unbind( "click" )

//删除特定函数的绑定，将函数作为第二个参数传入
var foo = function () {
  // 处理某个事件的代码
};

$("p").bind("click", foo); // ... 当点击段落的时候会触发 foo 

$("p").unbind("click", foo); // ... 再也不会被触发 foo
```

3. delegate(selector,[type],[data],fn)

> 指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。jQuery 3.0中已弃用此方法，请用 `on()`代替。

使用 `delegate()` 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。

- selector:选择器字符串，用于过滤器触发事件的元素。
- type:附加到元素的一个或多个事件。由空格分隔多个事件值。必须是有效的事件。
- data:传递到函数的额外数据
- fn:当事件发生时运行的函数

```js
$("div").delegate("button","click",function(){
  $("p").slideToggle();
});
```

4. live(type, [data], fn)

> jQuery 给所有匹配的元素附加一个事件处理函数，即使这个元素是以后再添加进来的也有效。

```js
$('body').append('<div class="clickme">Another target</div>');

$('.clickme').live('click', function() {
  alert("Live handler called."); 
});
```

5. on(events,[selector],[data],fn)

> 在选择元素上绑定一个或多个事件的事件处理函数。`on()`方法绑定事件处理程序到当前选定的jQuery对象中的元素。在jQuery 1.7中，`.on()`方法 提供绑定事件处理程序所需的所有功能。

- events:一个或多个用空格分隔的事件类型和可选的命名空间，如"click"或"keydown.myPlugin" 。
- selector:一个选择器字符串用于过滤器的触发事件的选择器元素的后代。如果选择的< null或省略，当它到达选定的元素，事件总是触发。
- data:当一个事件被触发时要传递event.data给事件处理函数。
- fn:该事件被触发时执行的函数。 false 值也可以做一个函数的简写，返回false。

```js
function myHandler(event) {
alert(event.data.foo);
}
$("p").on("click", {foo: "bar"}, myHandler)
```

6. off(events,[selector],[fn])

> 在选择元素上移除一个或多个事件的事件处理函数。`off()` 方法移除用`.on()`绑定的事件处理程序。

- events:一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如 "click", "keydown.myPlugin", 或者 ".myPlugin".
- selector:一个最初传递到.on()事件处理程序附加的选择器。
- fn:事件处理程序函数以前附加事件上，或特殊值false.

```js
var validate = function () {
  // code to validate form entries
};

// delegate events under the ".validator" namespace
$("form").on("click.validator", "button", validate);

$("form").on("keypress.validator", "input[type='text']", validate); 

// remove event handlers in the ".validator" namespace

$("form").off(".validator");
```


- 推荐使用`on()`进行绑定事件
- 使用`off()`进行移除事件


### on绑定事件使用事件代理的写法
```js
$(document).on('click','动态添加的class',function(){
    //内部实现代码
}

//document 可以换成动态添加html的父元素，一直存在的
```

## 题目4：jQuery 如何展示/隐藏元素？

- hide([speed,[easing],[fn]])
- show([speed,[easing],[fn]])

参数含义：

- speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
- easing:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
- fn:在动画完成时执行的函数，每个元素执行一次。

```js
$("p").hide()//隐藏p元素
$("p").show()//显示p元素
```

## 题目5： jQuery 动画如何使用？
### animate(params,[speed],[easing],[fn])

> 用于创建自定义动画的函数。这个函数的关键在于指定动画形式及结果样式属性对象。这个对象中每个属性都表示一个可以变化的样式属性（如“height”、“top”或“opacity”）。注意：所有指定的属性必须用骆驼形式，比如用marginLeft代替margin-left.

  - params:一组包含作为动画属性和终值的样式属性和及其值的集合
  - speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
  - easing:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing".
  - fn:在动画完成时执行的函数，每个元素执行一次。

```js
// 在一个动画中同时应用三种类型的效果
$("#go").click(function(){
  $("#block").animate({ 
    width: "90%",
    height: "100%", 
    fontSize: "10em", 
    borderWidth: 10
  }, 1000 );
});
```

多个动画：
```html
	<div class="box" style="position: relative;background-color: red;width: 50px;height: 50px;"></div>
	<button id="btn">变化</button>
	<script>
	$('#btn').on('click',function(){

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

## 题目6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

如何设置和获取元素内部 HTML 内容?
```js
$('div').html()//获取div HTML内容

$('div').html('123')//设置div HTML内容
```

如何设置和获取元素内部文本？
```js
$('div').text()//获取div 内部文本

$('div').text('123')//设置div 内部文本
```

## 题目7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？

```js
$('input').val()//获取input里面的内容
$('input').val('123')//修改input的值
$('input:checked').val()//获取选择的value
$('input:checked').val('23')//修改选择的value
$("img").attr("src");//获取img的src
$("img").attr({ src: "test.jpg", alt: "Test Image" });//为所有图像设置src和alt属性
```