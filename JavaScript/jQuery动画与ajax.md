## 常用方法

### .each( function(index, Element) )

> 遍历一个jQuery对象，为每个匹配元素执行一个函数

```js
$( "li" ).each(function( index ) {
  console.log( index + ": "" + $(this).text() );
});
```

### .map( callback(index, domElement) )

```js
//通过一个函数匹配当前集合中的每个元素,产生一个包含新的jQuery对象
$('div').map(function(i, ele){
    return this.id;
});
```

### jQuery.extend([deep,] target [, object1 ] [, objectN ] )

```js
    var obj1 = {a:1}
    var obj2 = {b:2,c:3}
    var obj3 = {b:3,d:5}

    $.extend(obj1,obj2)  //obj1 == {a:1,b:2,c:3}
    $.extend(obj1,obj2,obj3)  //obj1 == {a:1,b:3,c:3,d:5}
    var obj4 = $.extend({},obj1,obj2,obj3) //obj4 ==  {a:1,b:3,c:3,d:5}
```

### .clone( [withDataAndEvents ] )

.clone()方法深度复制所有匹配的元素集合，包括所有匹配元素、匹配元素的下级元素、文字节点

通常我们将页面上一个元素插入到DOM里另一个地方，它会被从老地方移走，类似剪切的效果
```js
$('.hello').appendTo('.goodbye');

<div class="container">
  <div class="goodbye">
    Goodbye
    <div class="hello">Hello</div>
  </div>
</div>
```

但是我们如果需要的是复制而不是剪切，我们可以像下面这样写代码：

```js
$('.hello').clone().appendTo('.goodbye');
```

### .index() / .index(selector)/ .index(element)

> 从给定集合中查找特定元素index

```js
var listItem = $( "#bar" );
alert( "Index: " + $( "li" ).index( listItem ) );
```

### .ready( handler )

当DOM准备就绪时，指定一个函数来执行。

下面两种语法全部是等价的：

- $(document).ready(handler)
- $(handler)

我们经常这么使用:

```js
$(function(){
    console.log('ready');
});
```

## jQuery ajax

```js
$.ajax({
    url: 'xxx.php',
    method: 'GET',
    data: {
        name: 'Byron',
        age: 24,
        sex: 'Male'
    }
}).done(function(result){

    console.log(result);

}).fail(function(jqXHR, textStatus){

    consloe.log(textStatus);

});
```