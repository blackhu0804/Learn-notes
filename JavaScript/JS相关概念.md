## 1.CSS和JS在网页中的放置顺序是怎么样的？

- 通常人们会在`<head></head>`标签里用`<link>`来引入CSS文件

- 为避免JavaScript操作HTML，而HTML元素还未载入而报错，因此将JavaScript代码放置到`<body></body>`的最后。

## 2.解释白屏和FOUC

- 白屏和FOUC（无样式内容闪烁）的产生主要和浏览器的渲染机制有关，有的浏览器是等待html和css加载完之后再进行渲染（白屏问题），有的浏览器是先显示已加载的html内容，等到css加载完成后重新对内容增加样式（FOUC问题）

- 白屏的产生

    白屏的产生有三种情况：
        
    1. 将css文件放到html文档的最后
    2. 使用 @import 标签（使用@import标签引入样式文件的情况下，会等待html文件加载完成后才加载css文件）,即使 CSS 放入 link, 并且放在头部,也可能出现白屏。
    3. 将js文件放在头部，并且没有使用defer或async延迟或者异步加载js文件，导致html和css文件加载阻塞。

- FOUC的产生

    浏览器先显示已加载的html内容，等到css加载完后重新对内容增加样式导致的。
    如果把样式放在底部,对于IE浏览器,在某些场景下(点击链接,输入URL,使用书签进入等),会出现 FOUC 现象(逐步加载无样式的内容,等CSS加载后页面突然展现样式).对于 Firefox 会一直表现出 FOUC .

## 3.async和defer的作用是什么？有什么区别？

```javascript
<script src="script.js"></script>
```
- 没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。


```javascript
<script async src="script.js"></script>
```

- 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

```javascript
<script defer src="script.js"></script>
```

- 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成

## 4.简述网页的渲染机制

- 解析HTML 标签，构建DOM树
- 解析CSS标签，构建CSSOM树
- 把DOM和CSSOM树组合成 渲染树
- 在渲染树的基础上进行布局, 计算每个节点的几何结构
- 把每个节点绘制到屏幕上 (painting)