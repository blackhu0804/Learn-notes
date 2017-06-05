# class 和 id 的使用场景?
- class：类选择器，指定标签的类名。可以用到不同的标签上。
- id：id选择器，指定标签的id，定位到页面的唯一元素。

# CSS选择器常见的有几种?
### 基础选择器
| 选择器 | 含义 |
| ------------- |:-------------:|
| * | 通用元素选择器，匹配页面任何元素 |
| #name | id选择器 |
| .name | 类选择器 |
| element | 标签选择器 |

### 组合选择器
| 选择器 | 含义 |
| ------------- |:-------------:|
| E,F | 多元素选择器，用，分隔。
|		E F | 后代选择器，用空格分隔，匹配E元素所有的后代F（不仅仅是子元素）|
|		E>F | 子元素选择器，匹配E元素的所有直接子元素F |
|		E+F | 直接相邻选择器，匹配E元素之后的相邻同级元素F |
|		E~F | 普通相邻选择器，匹配E元素之后的所有的同级元素F |
|		.class1.class2 | 类名既有class1又有class2 |

### 属性选择器
| 选择器 | 含义 |
| ------------- |:-------------:|
| E[attr] | 匹配带有attr属性的E元素 |
| E[attr = value]	| 匹配属性attr值为value的元素，div[id=test],匹配id=test的div |
| E[attr ~= value]	| 匹配所有属性attr具有多个空格分隔、其中一个值等于value的元素 |
| E[attr ^= value]	| 匹配属性attr的值以value开头的元素 |
| E[attr $= value]	| 匹配属性attr的值以value结尾的元素 |
| E[attr *= value]	| 匹配属性attr的值包含value的元素 |

### 伪类选择器

| 选择器 | 含义 |
| ------------- |:-------------:|
| E:first-child	| 匹配作为长子（第一个子女）的元素E |
| E:link	| 匹配所有未被点击的链接 |
| E:visited	| 匹配所有已被点击的链接 |
| E:active	| 匹配鼠标已经其上按下、还没有释放的E元素 |
| E:hover	| 匹配鼠标悬停其上的E元素 |
| E:focus	| 匹配获得当前焦点的E元素 |
| E:lang(c)	| 匹配lang属性等于c的E元素 |
| E:enabled	| 匹配表单中可用的元素 |
| E:disabled	| 匹配表单中禁用的元素 |
| E:checked	| 匹配表单中被选中的radio或checkbox元素 |
| E::selection	| 匹配用户当前选中的元素 |
| E:nth-child(n)	| 匹配其父元素的第n个子元素，第一个编号为1 |
| E:first-of-type	| 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1) |

> visited放在hover和active前面

### 伪元素选择器

| 选择器 | 含义 |
| ------------- |:-------------:|
|E::first-line	| 匹配E元素内容的第一行 |
|E::first-letter	| 匹配E元素内容的第一个字母 |
|E::before{	content:'aaa';}	| 在E元素之前插入生成的内容 |
|E::after{content: 'bbb';}	| 在E元素之后插入生成的内容 |

# 选择器的优先级是怎样的?对于复杂场景如何计算优先级？
### 选择器的优先级从高到低：

1. 在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式。
2. 作为style属性写在元素标签上的内联样式
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器自定义

### 复杂场景：
```
行内样式 <div style="xxx"></div> ==> a
ID 选择器 ==> b
类，属性选择器和伪类选择器 ==> c
标签选择器、伪元素 ==> d

*             {}  /* a=0 b=0 c=0 d=1 -> 0,0,0,0 */
p             {}  /* a=0 b=0 c=0 d=1 -> 0,0,0,1 */
a:hover       {}  /* a=0 b=0 c=1 d=1 -> 0,0,1,1 */
ul li         {}  /* a=0 b=0 c=0 d=2 -> 0,0,0,2 */
ul ol+li      {}  /* a=0 b=0 c=0 d=3 -> 0,0,0,3 */
h1+input[type=hidden]{}  /* a=0 b=0 c=1 d=2 -> 0,0,1,1 */
ul ol li.active   {}  /* a=0 b=0 c=1 d=3 -> 0,0,1,3 */
#ct .box p        {}  /* a=0 b=1 c=1 d=1 -> 0,1,1,1 */
div#header:after  {}  /* a=0 b=1 c=0 d=2 -> 0,1,0,2 */
style=""          /* a=1 b=0 c=0 d=0 -> 1,0,0,0 */
```
> 先比较a，a大的权重最大，再依次比较b，c，d

# a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？
- link表示链接在正常情况下（即页面刚加载完成时）显示的颜色。

- hover表示鼠标悬停时显示的颜色。

- active表示当所指元素处于激活状态（鼠标在元素上按下还没有松开）时所显示的颜色。
- visited表示点击元素之后的状态。
- focus表示元素获得光标焦点时使用的颜色，主要用于文本框输入文字时使用

> 伪类的顺序应为link--visited--hover--focus--active。
a:active必须要在a:focus，a:hover的后面，否则就会被覆盖。
a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。

# 以下选择器分别是什么意思？
    #header{}    id为header的元素
    .header{}    class为header的元素
    .header .logo{}     class为header的子元素的class为logo的元素
    .header.mobile{}      class既有header又有mobile的元素
    .header p, .header h3{}       class为header下的p元素和h3元素
    #header .nav>li{}       id为header下的class为nav的所有直接子元素li
    #header a:hover{}     id为header下的a标签的hover状态
    #header .logo~p{}     id为header下的class为logo之后的所有同级p元素
    #header input[type="text"]{}     id为header下的input元素属性type为text的元素

# 伪类选择器

- E:first-child	匹配元素E的第一个子元素
- E:link	匹配所有未被点击的链接
- E:visited	匹配所有已被点击的链接
- E:active	匹配鼠标已经其上按下、还没有释放的E元素
- E:hover	匹配鼠标悬停其上的E元素
- E:enabled	匹配表单中可用的元素
- E:disabled	匹配表单中禁用的元素
- E:checked	匹配表单中被选中的radio或checkbox元素
- E::selection	匹配用户当前选中的元素
- E:nth-child(n)	匹配其父元素的第n个子元素，第一个编号为1
- E:nth-last-child(n)	匹配其父元素的倒数第n个子元素，第一个编号为1
- E:nth-of-type(n)	与:nth-child()作用类似，但是仅匹配使用标签的元素
- E:nth-last-of-type(n)	与:nth-last-child() 作用类似，但是配使用同种标- 签的元素
- E:last-child	匹配父元素的最后一个子元素，等:nth-last-child(1)
- E:first-of-type	匹配父元素下使用同种标签的第一个子元素，等:nth-of-type- (1)
- E:last-of-type	匹配父元素下使用同种标签的最后一个子元素，等- :nth-last-of-type(1)
- E:only-child	匹配父元素下仅有的一个子元素，等:first-child:last-child- 或 :nth-child(1):nth-last-child(1)
- E:only-of-type	匹配父元素下使用同种标签的唯一一个子元素，等- :first-of-type:last-of-type或 :nth-of-type(:nth-last-of-type(1)
- E:not(selector)	匹配不符合当前选择器的任何元素

# div:first-child、div:first-of-type、div :first-child和div :first-of-type的作用和区别 （注意空格的作用）

- div:first-child:匹配父元素的第一个子元素，如果是div成功匹配
- div:first-of-type:匹配父元素下的第一个为div的子元素
- div :first-child：选择div元素下的第一个子元素
- div :first-of-type :选择div元素下的同类元素的第一个子元素

# 运行如下代码，解析下输出样式的原因。
```html
<style>
.item1:first-child{
  color: red;
}
.item1:first-of-type{
  background: blue;
}
</style>
 <div class="ct">
   <p class="item1">aa</p>
   <h3 class="item1">bb</h3>
   <h3 class="item1">ccc</h3>
 </div>
 ```
 
 > .item1:first-child{} 选择的是div下的第一个class为item1的元素。

 > .item1:first-of-type{} 选择的是div下同类标签的第一个class为item1的元素。