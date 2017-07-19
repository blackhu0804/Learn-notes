# CSS浮动和定位

## CSS浮动

### 基本概念：
> 浮动模型也是一种可视化格式模型，浮动的框可以左右移动（根据float属性值而定），直到它的外边缘碰到包含框或者另一个浮动元素的框的边缘。浮动元素不在文档的普通流中，文档的普通流中的元素表现的就像浮动元素不存在一样.

### 行框：
> 浮动会让元素脱离普通流, 如果浮动的元素后面有一个文档流中元素,那么这个元素的框会表现的像浮动元素不存在,但是框的文本内容会受到浮动元素的影响,会移动以留出空间.用术语说就是浮动元素旁边的行框被缩短,从而给浮动元素流出空间,因而行框围绕浮动框

### 清理浮动：
> 解决父容器高度塌陷问题。

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

- 方法二 BFC：
#### BFC 特性：
- BFC会阻止垂直外边距（margin-top、margin-bottom）折叠
    - 按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。
    - 因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠
    - overflow: auto; display: inline-block; float: ; position: absolute; 块级格式化上下文。
- BFC不会重叠浮动元素
    - overflow: hidden; 
- BFC可以包含浮动

- 我们可以利用BFC的第三条特性来“清浮动”，这里其实说清浮动已经不再合适，应该说包含浮动。也就是说只要父容器形成BFC就可以，简单看看如何形成BFC

    - float为 left|right
    - overflow为 hidden|auto|scroll
    - display为 table-cell|table-caption|inline-block
    - position为 absolute|fixed

> 局限性：使用BFC使用float的时候会使父容器长度缩短，而且还有个重要缺陷——父容器float解决了其塌陷问题，那么父容器的父容器怎么办？overflow属性会影响滚动条和绝对定位的元素；position会改变元素的定位方式，这是我们不希望的，display这几种方式依然没有解决低版本IE问题。。。

#### 方法三：
- 伪元素(无副作用)：
```css
.clearfix:after{
      content:"";
      display:block;
      clear:left;
  }
```

> 总结：虽然我们得出了一种浏览器兼容的靠谱解决方案，但这并不代表我们一定得用这种方式，很多时候我们的父容器本身需要position：absolute等形成了BFC的时候我们可以直接利用这些属性了，大家要掌握原理，活学活用。总而言之清理浮动三种方式:
>   - 利用 clear属性，清除浮动
>   - 使父容器形成BFC
>   - 伪元素

## CSS定位

### 基本属性

| 值 | 属性 |
|:--------|:---------|
| inherit	| 规定应该从父元素继承 position 属性的值,使用场景无，一般我们不使用这个来进行定位。
| static	| 默认值,没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）
| relative	| 生成相对定位的元素，相对于元素本身正常位置进行定位,因此，left:20px 会向元素的 left 位置添加20px。使用场景一般是为了给子元素一个参考点，使子元素的absolute能够正常使用。
| absolute	| 生成绝对定位的元素，相对于static定位以外的第一个祖先元素（offset parent）进行定位,元素的位置通过left, top, right 以及 bottom 属性进行规定。使用场景一般为父容器的子元素进行定位。
| fixed	| 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 left, top, right 以及 bottom 属性进行规定
| sticky	| CSS3新属性，表现类似position:relative和position:fixed的合体，在目标区域在屏幕中可见时，它的行为就像它的行为就像position:relative; 而当页面滚动超出目标区域时，它的表现就像position:fixed，它会固定在目标位置.

### 普通流与相对定位
> CSS有三种基本的定位机制：普通流，相对定位和绝对定位

- 普通流是默认定位方式，在普通流中元素框的位置由元素在html中的位置决定，元素position属性为static或继承来的static时就会按照普通流定位，这也是我们最常见的方式
- 相对定位比较简单，对应position属性的relative值，如果对一个元素进行相对定位，它将出现在他所在的位置上，然后可以通过设置垂直或水平位置，让这个元素相对于它自己移动，在使用相对定位时，无论元素是否移动，元素在文档流中占据原来空间，只是表现出来的位置会改变

### 绝对定位与固定定位

- 相对定位可以看作特殊的普通流定位，元素位置是相对于它在普通流中位置发生变化，而绝对定位使元素的位置与文档流无关，也不占据文档流空间，普通流中的元素布局就像绝对定位元素不存在一样

- 绝对定位的元素的位置是相对于距离最近的非static祖先元素位置决定的。如果元素没有已定位(没有position：releative or absolute or fixed)的祖先元素，那么他的位置就相对于初始包含块html来定位demo。

- 因为绝对定位与文档流无关，所以绝对定位的元素可以覆盖页面上的其他元素，可以通过z-index属性控制叠放顺序，z-index越高，元素位置越靠上。


### 垂直水平居中：
```css
{
    top: 50%;
    margin-top: -height/2;
}
```