### 1、CSS的全称是什么?

> CSS全称：Cascading Style Sheets,层叠样式表。CSS 最主要的目的是将文件的内容与显示分隔开来。这有许多好处：
- 文件的可读性加强
- 文件的结构更加灵活
- 作者和读者可以自己决定文件的显示
- 文件的结构简化了
三种格式：
	@charset "utf-8"
	选择器{属性：值}	   注释：/* */
	伪类
	
### 2、CSS有几种引入方式? link 和@import 有什么区别?	       内联样式，无法写伪类
	内部样式:写到<style></style>标签里面
	外部样式：
			<link rel="stylesheet" type="text/css" href="index.css"> 一般放到head里面
			@import url(style.css);
			@import style.css;放到style里；是CSS的语法
			浏览器的默认样式

##### link和import的区别：
- link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
- link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
- link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
- link方式样式的权重高于@import的。
			
### 3、以下这几种文件路径分别用在什么地方，代表什么意思?
-  css/a.css     当前路径下的css文件夹下的a.css
- ./css/a.css     当前路径下的css文件夹下的a.css
- b.css      当前目录下的b.css文件
- ../imgs/a.png     上一级目录下的imgs文件夹下的a.png
- /Users/hunger/project/css/a.css 绝对路径，本地/Users/hunger/project/css/目录下的a.css
- http://cdn.jirengu.com/kejian1/8-1.png 网站路径

### 4、如果我想在js.jirengu.com上展示一个图片，需要怎么操作?
1.上传到服务器，用相对路径引用。
2.直接引用网站路径。

### 5、html和 css 的书写规范

#### HTML书写规范
1.缩进使用4个空格,嵌套的节点应该缩进；
2.在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现； 虽然doctype不区分大小写，但是按照惯例，doctype大写
3.通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。
4.用 标签可以指定页面应该用什么版本的IE来渲染。例如：
```
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```
5. 不要在自动闭合标签结尾处使用斜线。

#### CSS书写规范

1.缩进使用4个空格。
2.每个属性末尾都要加分号。
3.注释统一用'/* */'。
4.最外层统一使用双引号；url的内容要用引号；属性选择器中的属性值需要引号。
5.id和class使用有意义的单词，类名使用小写字母，以 - 分隔，id采用驼峰式命名。
6.颜色16进制用小写字母；颜色16进制尽量用简写。
7.不使用内联的style属性定义样式。
8.属性值是0的省略单位。


###  6、chrome开发者工具介绍

- element：显示页面完整的html代码，点击元素可在style查看css属性。
- console：js控制台。在这个面板可以查看警告、错误信息。 打印调试信息（console.log()）。
- sources：可以查看请求的资源情况，包括CSS、JS、图片等的内容。
- network：分析网站请求的网络情况，查看某一请求的请求头和响应头还有响应内容。点击左侧某一个具体请求URL，可以看到该请求的详细HTTP请求情况：我们可以在这里看到HTTP请求头、HTTP响应头、HTTP返回的内容等信息。
- timeline：JS执行时间、页面元素渲染时间。
- profiles：分析cpu执行时间、内存占用。
- application：记录网站加载的所有资源信息，包括存储数据（Local Storage、Session Storage、IndexedDB、Web SQL、Cookies）、缓存数据、字体、图片、脚本、样式表等。