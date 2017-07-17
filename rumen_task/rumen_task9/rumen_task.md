# 背景
| 属性 | 描述 |
|------|------|
| background	| 简写属性，作用是将背景属性设置在一个声明中
| background-attachment | 	背景图像是否固定或者随着页面的其余部分滚动
| background-color |	设置元素的背景颜色
| background-image	| 把图像设置为背景
| background-position	| 设置背景图像的起始位置
| background-repeat	| 设置背景图像是否及如何重复
| background-size	| 设置背景的大小(兼容性)

- background-position : 默认左上角
    - x y
    - x% y%
    - [top | center | bottom] [left | center | right]
- background-repeat
    - no-repeat:背景图片在规定位置
    - repeat-x:图片横向重复
    - repeat-y:图片纵向重复
    - repeat:全部重复
- background-size
    - 100px 100px 按设置缩放
    - contain   正好包括，等比缩放
    - cover     上下充满超出隐藏

```css
background-color: #F00;
background-image: url(background.gif);
background-repeat: no-repeat;
background-attachment: fixed;
background-position: 0 0;
```

可以缩写为一句：

```css
background: #f00 url(background.gif) no-repeat fixed 0 0;
```

# CSS Sprite

- 指将多个图片放到一张图片上。
- 使用CSS Sprite 可以减少网络请求，提高网页加载性能。

# 隐藏or透明

- opacity：透明度为0，整体 占用位置
- visibility：hidden;和opacity相似 占用位置
- display：none;消失不占用位置
- background-color：

# inline-block

- 既呈现 inline 特性(不占据一整行，宽度由内容宽度决定)
- 又呈现 block 特性 (可设置宽高，内外边距)
- 缝隙问题
- 默认以文字底部基线对齐，改变用vertical-align: ;

# line-height

- line-height: 2; 本身文字高度的两倍 
- line-height: 200%; 父容器文字高度的两倍
- height = line-heihgt; 来垂直居中单行文本

# 盒模型

- 标准盒模型：width和height指的是content的宽度
- ie盒子模型：width和height指的是content+padding+border
- box-sizing: content-box; 标准盒模型 
- box-sizing: border-box; ie盒模型

# icon

- image
- css sprites
- Icon Font
- CSS Icon
- SVG

### 1.image

- image大小设置
- img的vertical-align:middle;
- 请求数过多

### 2.CSS Sprites（精灵图）

- background-position: x y;
- 在线生成：css sprites generator
- 无法缩放不好修改

### 3.icon font
- 制作字体文件(iconfont.cn)
- 声明font-family
    - 使用本地连接
    - 使用第三方链接
- 使用font-family
    - html实体
    - css: before; (CSS转义字符'\')

### 4.CSS icon
- cssicon

### 5.SVG (ie9以后支持)
- img src=svg
- SVG sprites