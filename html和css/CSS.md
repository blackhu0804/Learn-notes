## CSS

- Q：描述下 “reset” CSS 文件的作用和使用它的好处。

- A：

  - 作用以及好处： 因为各个浏览器的默认样式有所不同，使用reset对默认浏览器样式进行清零重置，保持样式一致。

- Q：解释下浮动和它的工作原理。

- A：浮动最开始出现的意义是让文字环绕图片，浮动会脱离文档流，产生自己块级格式化上下文。

  - 清除浮动

  ```css
  .clearfix:after {
    content: '';
    display: block;
    clear:both;
  }
  .clearfix {
  	*zoom: 1;
  }
  ```

- Q： 解释下 CSS sprites，以及你要如何在页面或网站中使用它。

- A： CSS sprites 就是把网页中的一些小图片整合到一张图片文件中，再利用css的`background-image`,`background-repeat`,`background-position`的组合进行背景定位，减少http请求。

- Q：CSS选择器?

- A：

   	1. 类选择器
        1. id选择器
        2. 伪类选择器
        3. 关系选择器
        4. 属性选择器
        5. 元素选择器

- Q：CSS  hack

- A：由于不同的浏览器和浏览器各版本对CSS的支持及解析结果不一样，以及CSS优先级对浏览器展现效果的影响，我们可以据此针对不同的浏览器情景来应用不同的CSS。

  - 条件注释法

  ```
  	只在IE下生效
  	<!--[if IE]>
  	这段文字只在IE浏览器显示
  	<![endif]-->
  ```

  - 类内属性前缀法
  - 选择器前缀法

- Q：CSS盒模型

- A：

  - content-box（默认） 

    width = width + padding + border

  - border-box

    width = width (包含padding + border)

- Q：外边距合并问题

- A：

  - 相邻两个兄弟元素
  - 空元素的外边距
  - 父子外边距合并
    - 第一个子元素的上外边距和父元素的上外边距会进行合并
    - 最后一个子元素的下外边距和父元素的下外边距会进行合并

- Q：什么是BFC？

- A：BFC（块格式化上下文）

  - 根元素或其它包含它的元素
  - 浮动元素 (元素的 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 不是 `none`)
  - 绝对定位元素 (元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `absolute` 或 `fixed`)
  - 内联块 (元素具有 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)`: inline-block`)
  - 表格单元格 (元素具有 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)`: table-cell，HTML表格单元格默认属性`)
  - 表格标题 (元素具有 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)`: table-caption`, HTML表格标题默认属性)
  - 具有[`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 且值不是 `visible `的块元素，
  - [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)`: flow-root`
  - [`column-span`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-span)`: all `应当总是会创建一个新的格式化上下文，即便具有 `column-span: all` 的元素并不被包裹在一个多列容器中。

- Q：position属性( absolute | relative | static | fixed )

- A:

  - static: 无特殊定位，遵循文档流，top,right,marigin,left等属性不会被应用
  - relative：遵循文档流，可以使用top,right,marigin,left等属性。
  - absolute：脱离文档流，通过top,right,marigin,left等属性进行绝对定位。
  - fixed：脱离正常文档流，top,right,marigin,left等属性定位，滚动条滚动时不会随着滚动条的滚动改变位置。