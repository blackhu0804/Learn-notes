## 题目1：如何判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）。写一个函数 isVisible实现

```js
function isVisible($node){
  var scrollTop = $(window).scrollTop()
  var windowHeight = $(window).height()
  var offsetTop = $node.offset().top

  if(offsetTop < scrollTop + windowHeight && offsetTop > scrollTop){
    return true
  }
  return false 
}
```

## 题目2：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true 。用代码实现

```js
$(window).on('scroll',function(){
  if(isVisible($node)){
    console.log('true')
  }
})
```

## 题目3：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，以后再次出现不做任何处理。用代码实现

```js
$(window).on('scroll',function(){
  if(isVisible($node) && !isLoad($node)){
    $node.data("load","loaded")
    console.log('true')
  }
})

function isLoad($node){
  return $node.data("load") === 'loaded'
}
```

## 题目4： 图片懒加载的原理是什么？

原理：
1. 将所有的img标签，把真实的src地址放到自定义属性data-img
2. 当滚动页面时，检查页面所有的img标签，看这个标签是否出现在我们的视野，当出现在我们的视野时，再去判断它是否已经加载过，如果没有加载过，加载它

## 题目5： 实现视频中的图片懒加载效果

[预览地址](http://js.jirengu.com/pijib/1/edit?output)