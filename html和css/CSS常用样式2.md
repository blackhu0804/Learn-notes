# 1.text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中

> 让行内元素水平居中。作用在行内元素上。

# 2.IE 盒模型和W3C盒模型有什么区别?
> - IE的盒模型width、height包括content尺寸＋padding＋border。
> - W3C标准盒模型中padding、border所占的空间不在width、height范围内。

# 3.*{ box-sizing: border-box;}的作用是什么？
> 将所有元素的盒模型设置为IE盒模型。

# 4.line-height: 2和line-height: 200%有什么区别?

> line-height: 2;指的是本身文字高度的两倍
> line-height: 200%;指的是父容器文字高度的两倍

# 5.inline-block有什么特性？如何去除缝隙？高度不一样的inline-block元素如何顶端对齐?

> - inline-block是让元素既有inline属性，不占据一整行;又有block的属性,可以设置元素的高度宽度、内外边距。
> - 去除缝隙：给父元素加一条font-size: 0;给当前元素字体加默认大小。
> - 高度不一样的inline-block元素顶端对齐： vertical: top;

# 6.CSS sprite 是什么?

> CSS 精灵图
> - 指将多个图片放到一张图片上。
> - 使用CSS Sprite 可以减少网络请求，提高网页加载性能。

# 7.让一个元素"看不见"有几种方式？有什么区别?

- opacity: 0; 透明度为零，占用位置
- visibility: hidden;和opacity相似 占用位置
- display: none; 隐藏，不占用位置
- background-color: rgba(0，0，0，0.2) 背景透明
