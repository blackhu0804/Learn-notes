# CSS 杂谈

## Normal Flow(文档流)

1. 内联元素 span 从左到右排列，宽度不够换行。
2. 块级元素 div  从上到下排列，每个元素另起一行。
3. inline-block
4. display:table;
5. display:list-item;
6. display:flex;

## 宽高如何确定

1. 内联元素
    - 占地宽： 是由里面内容决定的。padding、margin会影响宽度，不会影响高度。
    - 占地高： line-height、font-size可以改变高度。
2. 块级元素
    - 内容区宽： 
        1. 父亲的内容区域的宽度 — 自己的左右边框 — 自己的左右 margin，auto。  可以通过white-space 控制是否换行
        2. 内容高度： 它内部文档流的高度的总和决定的，脱离文档流的不计入高度的计算。
3. inline-block 元素
    - 宽：
        1. 可以设置width 
        2. 内容决定宽度 
        3. 可以通过white-space 控制是否换行
    - 高: 
        1. line-height、font-size可以改变高度。 
        2. 它内部文档流的高度的总和决定的，脱离文档流的不计入高度的计算。


## 居中（水平、垂直）

> 不要写宽度100%，和固定height

### 文档流中元素

1. 水平居中
    1. 内联：在父元素上加text-align：center；
    2. 块级：
        - 固定宽度的div
            1. margin-left：auto；
            2. margin-right：auto；
        - 不固定宽度
            1. margin：0 100px；
2. 垂直居中
    1. 内联：
        -  在父元素上加line-height:100px;
        -  在父元素上加padding：10px 0;
        -  在父元素上加line-height:100px; 和 padding: 10px ;
    2. 块级：
        -  在父元素上加 padding：10px 0；

### 脱离文档流的元素（脱离文档流中的元素都会转化为块级元素）
 
1. 浮动元素居中？可能怕是有毛病。
2. 绝对定位元素居中：
    top: 50%;
    left: 50%;
    <!--margin-left: -width/2;
    margin-top: -height/2;-->
    transform:translate(-50%,-50%); <!--CSS3，不兼容ie-->
3. 垂直居中兼容性最好的table
    table tr td，在table加属性valign：middle；
## 布局（一栏、两栏、三栏）

### 一栏
-  [一栏布局](http://js.jirengu.com/qutut/21/edit?html,output)
-  [float实现内联元素居中](http://js.jirengu.com/gane/2/edit)
-  [flex实现内联元素居中](http://js.jirengu.com/gane/3/edit)

### 两栏
- [左右浮动](http://js.jirengu.com/huzad/1/edit)
- [felx实现两栏布局](http://js.jirengu.com/peyip/1/edit)
- [头像两栏布局](http://js.jirengu.com/peyip/4/edit)

### 三栏
- [三栏布局](http://js.jirengu.com/vosas/4/edit)
- [flex实现三栏布局](http://js.jirengu.com/vosas/4/edit?html,output)

IE：float
非IE：flex


面试技巧：具体化、分情况讨论