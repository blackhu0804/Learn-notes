# CSS布局

## 常见PC布局
- 固定宽度布局
- 弹性布局
- 响应式布局

### 内部元素水平居中

```CSS
.parent{
    text-align: center;
}
.child{
    display: inline-block;
}
```
> ie6不支持inline-block
```CSS
.child{
    *display: inline;
    *zonm: 1;  /×触发bfc×/
}
```

### 双列布局（一列固定宽度，一列自适应宽度）

```html
<style>
    #content:after{
      content: '';
      display: block;
      clear: both;
    }
    .aside{
      width: 200px;
      height: 500px;
      background: yellow;
      float: left;
    }
    .main{
      margin-left: 210px;
      height: 400px;
      background: red;
    }
    
    #footer{
      background: #ccc;
    }
  
  </style>
  <div id="content">
    <div class="aside">aside</div>
    <div class="main">content</div>
  </div>
  <div id="footer">footer</div>
```
[例子](http://js.jirengu.com/yusidavuqo/3/edit)

### 三列布局（两侧固定宽度，中间列自适应宽度）

[例子](http://js.jirengu.com/buyavowofi/4/edit)