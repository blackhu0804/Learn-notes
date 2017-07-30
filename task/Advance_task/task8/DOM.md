## 题目1： dom对象的innerText和innerHTML有什么区别？
- innerText:innerText是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容
- innerHTML:innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM

## 题目2： elem.children和elem.childNodes的区别？

- elem.children:非标准的，它返回指定元素的子元素集合。它只返回HTML节点，不返回文本节点。
- elem.childNodes：标准的，它返回指定元素的子元素集合，包括HTML节点，所有属性，文本。可以通过nodeType来判断是哪种类型的节点，只有当nodeType==1时才是元素节点，2是属性节点，3是文本节点。

## 题目3：查询元素有几种常见的方法？ES5的元素选择方法是什么?

- `getElementById()`:方法返回匹配指定ID属性的元素节点
- `getElementsByClassName()`:方法返回一个类似数组的对象（HTMLCollection类型的对象），包括了所有class名字符合指定条件的元素（搜索范围包括本身）
- `getElementsByTagName()`:返回所有指定标签的元素（搜索范围包括本身）
- `getElementsByName()`:选择拥有name属性的HTML元素，比如form、img、frame、embed和object，返回一个NodeList格式的对象
- `querySelector()`:querySelector方法返回匹配指定的CSS选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null。querySelector方法无法选中CSS伪元素。
- `querySelectorAll()`:返回匹配指定的CSS选择器的所有节点，返回的是NodeList类型的对象。
- `elementFromPoint()`:elementFromPoint方法返回位于页面指定位置的元素。

> ES5的选择方法是`querySelector()`，`querySelectorAll()`，支持IE8以上。

## 题目4：如何创建一个元素？如何给元素设置属性？如何删除属性

```js
var h1 = document.createElement('h1')//创建h1元素
h1.setAttribute('class','title')//设置class属性
h1.removeAttribute('class')//删除属性
```

## 题目5：如何给页面元素添加子元素？如何删除页面元素下的子元素?

- `appendChild()`在元素末尾添加元素
- `insertBefore()`在某个元素之前插入元素
- `removeChild()`删除元素

## 题目6： element.classList有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?
- `ele.classList.add()`:添加一个类名
- `ele.classList.item()`:返回集合索引对应的值
- `ele.classList.cotains()`：判断是否包含指定class
- `ele.classList.remove()`：删除指定的class

## 题目7： 如何选中如下代码所有的li元素？ 如何选中btn元素？
```js
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>

document.querySelectorAll('.mod-tabs li')；
document.querySelector('.btn')；
```