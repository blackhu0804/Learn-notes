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

# font
- font-size:字体大小
- font-family:字体
- font-weight:文字粗细
- line-height:行高 可以使用百分比、倍数、固定值
- 都可以继承给子元素

> font-family: 使用浏览器打开页面时，浏览器会读取 HTML 文件进行解析渲染。当读到文字时会转换成对应的 unicode码（可以认为是世界上任意一种文字的特定编号）。再根据HTML 里设置的 font-family （如果没设置则使用浏览器默认设置）去查找电脑里（如果有自定义字体@font-face ，则加载对应字体文件）对应字体的字体文件。找到文件后根据 unicode 码去查找绘制外形，找到后绘制到页面上。
font-family写法：空格要加引号，unicode也要加引号
#### 怎么转换成unicode？
打开控制台 escape('微软雅黑')，把 %u替换成 \

> 注：chrome的默认大小为16px，最小字体为12px。

# 文本
- text-align：文本对其方式 left、center、right、- justify。用在块级元素上，对行内元素生效。
- text-indent：文案第一行缩进距离
- text-decoration： none、underline、line-through、- overline
- color：文字颜色
- text-transform：改变文字大小写none、uppercase（字母变成大写）、- lowercase、capitalize（首字母大写）
- word-spacing：可以改变字（单词）之间的标准间隔
- letter-spacing：字母间隔修改的是字符或字母之间的间隔

#### 行内元素居中
```css
	text-align: center;
```
#### 单行文本溢出改为...
```css
	white-space: nowrap; <!--不变行-->
	overflow: hidden;
	text-overflow: ellipsis; <!--文本溢出改为...-->
```

# 颜色
- 单词
- 十六进制
- rgb
- rgba

# 单位
- px：固定单位
- 百分比：宽高、文字大小、line-height、
- em：相对单位，相对于父元素字体大小
- rem：相对单位，相对于根元素（html）字体大小
- vw vh: 相对单位，1vw 为屏幕宽度的1%。兼容性差

# 隐藏or透明

- opacity：0~1;
- visibility：hidden;
- display:none;
- background-color:rgba(0,0,0,0.2);

