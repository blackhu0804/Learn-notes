# DOM

> 文档对象模型 (DOM) 是HTML和XML文档的编程接口。它给文档（结构树）提供了一个结构化的表述并且定义了一种方式—程序可以对结构树进行访问，以改变文档的结构，样式和内容。

DOM 提供了一种表述形式将文档作为一个结构化的节点组以及包含属性和方法的对象。从本质上说，它将web 页面和脚本或编程语言连接起来了。

## document对象

document对象常用属性：
```js
document.doctype; // <!DOCTYPE html>
document.doctype.name; // "html"
document.head;
document.body;
```
### location
```js
// 假定当前网址为http://user:passwd@www.example.com:4097/path/a.html?x=111#part1

document.location.href // "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
document.location.protocol // "http:"
document.location.host // "www.example.com:4097"
document.location.hostname // "www.example.com"
document.location.port // "4097"
document.location.pathname // "/path/a.html"
document.location.search // "?x=111"
document.location.hash // "#part1"
document.location.user // "user"
document.location.password // "passed"


// 跳转
document.location = 'http://www.example.com';
// 等价于
document.location.href = 'http://www.example.com';
```

### innerText
innerText是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容

### innerHTML、outerHTML
innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM

## Element对象
Element有几个重要属性：
- nodeName：元素标签名，还有个类似的tagName
- nodeType：元素类型
- className：类名
- id：元素id
- children：子元素列表（HTMLCollection）
- childNodes：子元素列表（NodeList）
- firstChild：第一个子元素
- lastChild：最后一个子元素
- nextSibling：下一个兄弟元素
- previousSibling：上一个兄弟元素
- parentNode、parentElement：父元素

### 查询元素

- getElementById()

```js
var elem = document.getElementById("test");
```

- getElementsByClassName()
```js
var elements = document.getElementsByClassName(names);

//getElementsByClassName方法的参数，可以是多个空格分隔的class名字，返回同时具有这些节点的元素
var elements = document.getElementsByClassName('red test');
```

- getElementsByTagName()

```js
//getElementsByTagName方法返回所有指定标签的元素（搜索范围包括本身）。
var paras = document.getElementsByTagName("p");
```

- querySelector()

querySelector方法返回匹配指定的CSS选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null。
```js
var el1 = document.querySelector(".myclass");
var el2 = document.querySelector('#myParent > [ng-click]');
```
querySelector方法无法选中CSS伪元素。

- querySelectorAll()

querySelectorAll方法返回匹配指定的CSS选择器的所有节点，返回的是NodeList类型的对象。NodeList对象不是动态集合，所以元素节点的变化无法实时反映在返回结果中。

```js
elementList = document.querySelectorAll(selectors);
//querySelectorAll方法的参数，可以是逗号分隔的多个CSS选择器，返回所有匹配其中一个选择器的元素。
var matches = document.querySelectorAll("div.note, div.alert");
```

## 创建元素

### createElement()

```js
var newDiv = document.createElement("div");
```

### createTextNode()
```js
//createTextNode方法用来生成文本节点，参数为所要生成的文本节点的内容。
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
```

### createDocumentFragment()
```js
//createDocumentFragment方法生成一个DocumentFragment对象。
var docFragment = document.createDocumentFragment();
```
> DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成较复杂的DOM结构，然后插入当前文档。这样做的好处在于，因为DocumentFragment不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。

## 修改元素

###　appendChild()在元素末尾添加元素
```js
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
newDiv.appendChild(newContent);
``` 

### insertBefore()在某个元素之前插入元素
```js
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
newDiv.insertBefore(newContent, newDiv.firstChild);
```

### replaceChild()接受两个参数：要插入的元素和要替换的元素
```js
newDiv.replaceChild(newElement, oldElement);
```

## 删除元素，删除元素使用removeChild()方法即可
```js
parentNode.removeChild(childNode);
```
## clone元素
cloneNode()方法用于克隆元素，方法有一个布尔值参数，传入true的时候会深复制，也就是会复制元素及其子元素（IE还会复制其事件），false的时候只复制元素本身
```js
node.cloneNode(true);
```

## 属性操作

### getAttribute()用于获取元素的attribute值
```js
node.getAttribute('id');
```

### createAttribute()方法生成一个新的属性对象节点，并返回它
```js
attribute = document.createAttribute(name);
```

### setAttribute()方法用于设置元素属性
```js
var node = document.getElementById("div1");
node.setAttribute("my_attrib", "newVal");
```

### removeAttribute()用于删除元素属性
```js
node.removeAttribute('id');
```

