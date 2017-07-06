# 块级元素和行内元素
	块级可以包含块级和行内，行内只能包含文本和行内
	块级占用一整块行空间，行内占据自身宽度空间
	块级元素：
		div h1 h2 h3 h4 h5 h6 p hr
		form ul dl ol pre table
		li dd dt tr td th
	行内元素：
		em strong span a br img 
		button input label select textarea
		code script 
	宽高只对块级元素生效，对行内元素无效。
	边框：solid 实现 dotted 圆点 dash 虚线
	块级元素：margin:0 auto;居中
	
### 特性区别：
#### 行内元素：
- 元素的高度，宽度不可用
- 行内元素只能包含行内元素和文本
- 占据的空间是自身，多个元素可以并排排列
- 行内元素上下边距都不可用，作于可用

#### 块级元素：
- 块级元素占据一行
- 块级元素可以直接设置宽高
- 块级元素可以包含块级元素和行内元素
- 块级元素边距都有效

# 什么是 CSS 继承? 哪些属性能继承，哪些不能？
> css继承指的是特定的css属性向下传递给后代

#### 不可以继承的属性：
> display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi。

#### 所有元素可继承：
> visibility和cursor;

#### 内联元素可继承：
> letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction

#### 块级元素可继承：
> text-indent和text-align

#### 列表元素可继承：

> list-style、list-style-type、list-style-position、list-style-image

#### 表格元素可继承：
> border-collapse
# 如何让块级元素居中？如何让行内元素水平居中？
- 块级元素水平居中：margin:0 auto;
- 行内元素水平居中：text-align: center;

# 单行文本溢出加 ...如何实现?

    white-space: nowrap; 不折行
    overflow: hidden; 超出元素隐藏
    text-overflow: ellipsis; 超出部分用...代替

# px em rem区别？

- px：固定大小
- em：相对大小，相对于父元素的字体大小
- rem：相对大小，相对于根元素（html）的字体大小

# 下面代码的作用,引号的作用，字体里\5b8b\4f53代表什么?
```html
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```

表示字体大小为12px，行高1.5倍，多个单词不加引号会识别成多个元素，"\5b8b\4f53"是对应字体的unicode编码。

## 如何把字体转换成unicode编码？

> 打开控制台 escape('微软雅黑')，把 %u替换成 \