## 浮动元素有什么特征？对父容器、其他浮动元素、普通元素、文字分别有什么影响?
- 特征：
浮动元素会脱离文档流，使普通文档流的元素无法识别浮动元素，文档的普通流中的元素表现的就像浮动元素不存在一样。但是如果浮动的元素后面有一个文档流中元素,那么这个元素的框会表现的像浮动元素不存在,但是框的文本内容会受到浮动元素的影响,会移动以留出空间。元素设置为浮动之后，就生成一个块级框（css行高提出的概念），没必要再声明display:block，可以设置宽高。
- 影响：
    - 对父容器来说，浮动元素贴着父容器内边距排列，父容器不会识别浮动元素，不会撑开父元素高度。
    - 对设置float的元素会相互识别，对设置position元素，相互之间不会识别，position元素不会被任何元素都不会识别，包括文字。
    - 普通元素无法识别浮动元素，所以普通元素仍按照普通文档流布局。

## 清除浮动指什么? 如何清除浮动?

> 清楚浮动的目的是解决父容器高度塌陷问题。
- 清除浮动办法：
    - 方法一：
    ```html
    <div style="border: solid 5px #0e0; width:300px;">
      <div style="height: 100px; width: 100px; background-color: Red;  float:left;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Green;  float:left;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Yellow;  float:left;">
      </div>
      <div style="clear:both;"></div>
    </div>
    ```
    - 方法二：
    使父元素成为一个BFC，由于BFC的特性：可以包含浮动元素，所以达到了清除浮动的效果。
    - 方法三：
    伪元素：
    ```css
    .clearfix:after{
         content: "";
         display: block;
         clear: both;
    }
    ```

## 有几种定位方式，分别是如何实现定位的，参考点是什么，使用场景是什么？
| 值 | 属性 |
|:--------|:---------|
| inherit	| 规定应该从父元素继承 position 属性的值,使用场景无，一般我们不使用这个来进行定位。
| static	| 默认值,没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）
| relative	| 生成相对定位的元素，相对于元素本身正常位置进行定位,因此，left:20px 会向元素的 left 位置添加20px。使用场景一般是为了给子元素一个参考点，使子元素的absolute能够正常使用。
| absolute	| 生成绝对定位的元素，相对于static定位以外的第一个祖先元素（offset parent）进行定位,元素的位置通过left, top, right 以及 bottom 属性进行规定。使用场景一般为父容器的子元素进行定位。
| fixed	| 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 left, top, right 以及 bottom 属性进行规定
| sticky	| CSS3新属性，表现类似position:relative和position:fixed的合体，在目标区域在屏幕中可见时，它的行为就像它的行为就像position:relative; 而当页面滚动超出目标区域时，它的表现就像position:fixed，它会固定在目标位置.

## z-index 有什么作用? 如何使用?

> z-index 属性指定了一个元素及其子元素的 z-order。 当元素之间重叠的时候，z-order 决定哪一个元素覆盖在其余元素的上方显示。 通常来说 z-index 较大的元素会覆盖较小的一个。Z-index只能工作在被明确定义了absolute，fixed或relative 这三个定位属性的元素中。

> 对于一个已经定位的元素（即position属性值是非static的元素），z-index 属性指定：
> 1. 元素在当前堆叠上下文中的堆叠层级。
> 2. 元素是否创建一个新的本地堆叠上下文。

## position:relative和负margin都可以使元素位置发生偏移?二者有什么区别?

- position: relative;是相对于自身的位置进行偏移,原本所占的位置不会被其他元素占据；
- 负margin ： 自身在文档流的位置也会随着变化，会影响其他元素位置，可以被其他元素占据之前位置。

## BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明

- BFC：一个块格式化上下文（block formatting context） 是Web页面的可视化CSS渲染的一部分。它是块盒子的布局发生，浮动互相交互的区域。

- 如何形成BFC：
    - float为 left|right
    - overflow为 hidden|auto|scroll
    - display为 table-cell|table-caption|inline-block
    - position为 absolute|fixed

- 作用：
    - BFC会阻止垂直外边距（margin-top、margin-bottom）折叠
    - 按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。
    - 因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠
    - BFC不会重叠浮动元素
    - BFC可以包含浮动
```html
    <div style="border: solid 5px #0e0; width:300px;overflow:hidden;">
        <div style="height: 100px; width: 100px; background-color: Red;  float:left;">
        </div>
        <div style="height: 100px; width: 100px; background-color: Green;  float:left;">
        </div>
        <div style="height: 100px; width: 100px; background-color: Yellow;  float:left;">
        </div>
    </div>
```
> 清除浮动撑开父元素的高度

## 在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？父子外边距合并的范例

> 外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。
合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

> 只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并

- 两个兄弟元素在垂直方向上合并外边距，取较大值进行合并。

```css
#d1 {
  width:100px;
  height:100px;
  margin-bottom:20px;
}
#d2 {
  width:100px;
  height:100px;
  margin-top:10px;
}

<div id="d1">
</div>

<div id="d2">
</div>
```
![](https://github.com/hu970804/Blog/blob/master/html%E5%92%8Ccss/img/1.gif)
- 当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并。
```css
<div class=”parent”>
    <div class=”child”>
    </div>
</div>

.parent{
    width: 200px;
    height: 100px;
    margin-top:10px;
    background-color: red;
}
.child{
       width: 100px;
       height: 100px;
       margin-top:30px;
       background-color: yellow;
 }
```
![](https://github.com/hu970804/Blog/blob/master/html%E5%92%8Ccss/img/2.gif)
- 外边距自己和自己合并
如果一个元素没有边框和填充，但有上下外边距，这时它的上下外边距会合并。
```css
#d1 {
  margin-top:20px;
  margin-bottom:20px;
}
<div id="d1">
</div>
```
![](https://github.com/hu970804/Blog/blob/master/html%E5%92%8Ccss/img/3.gif)
- 元素垂直方向上的兄弟元素也有外边距，那么垂直方向的外边距依旧会发生合并。
```css
#d1 {
  margin-top:50px;
  margin-bottom:20px;
}

#d2 {
  width:100px;
  height:100px;
  margin-bottom: 80px;
}
<div id="d2">
</div>
<div id="d1">
</div>
```
![](https://github.com/hu970804/Blog/blob/master/html%E5%92%8Ccss/img/4.gif)
> 如何解决边距重叠:
> - 给对应元素加上阻挡（例如border，非空内容，padding等）
> - 利用 BFC会阻止垂直外边距折叠的特性，将对应元素转换为BFC来解决边距重叠。
