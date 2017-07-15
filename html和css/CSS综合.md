# CSS综合

## CSS编码规范

### 基本命名规范

1.所有命名都使用英文小写

推荐：`<div class="main"></div> `

不推荐： `<div class="Main"></div> `

2.命名用引号包裹

推荐：`<div id="header"></div> `

不推荐： `<div id=header></div> `

3.用中横线连接

推荐：`<div class="mod-modal"></div> `

不推荐： `<div class="modModal"></div> `

4.命名体现功能，不涉及表现样式(颜色、字体、边框、背景等)

推荐：`<div class="text-lesser"></div>`

不推荐： `<div class="light-grey"></div>`

### 常见命名

- .wrap或.wrapper -- 用于外侧包裹
- .container或 .ct -- 包裹容器
- .header -- 用于头部
- .body -- 页面 body
- .footer -- 页面尾部
- aside、sidebar -- 用于侧边栏
- .content -- 和header footer 对应，用于主要内容
- .navigation -- 导航元素
- .pagination -- 分页
- .tabs > .tab -- tab 切换
- .breadcrumbs -- 导航列表、面包屑
- .dropdown -- 下拉菜单
- .article -- 文章
- .main -- 用于主体
- .thumbnail -- 头像，小图像
- .media -- 媒体资源
- .panel -- 面板
- .tooltip -- 鼠标放置上去的提示
- .popup -- 鼠标点击弹出的提示
- .button、.btn -- 按钮
- .ad -- 广告
- .subnav -- 二级导航
- .menu -- 菜单
- .tag -- 标签
- .message或者.notice -- 提示消息
- .summary -- 摘要
- .logo -- logo
- .search -- 搜索框
- .login -- 登录
- .register -- 注册
- .username -- 用户名
- .password -- 密码
- .banner -- 广告条
- .copyright -- 版权
- .modal或者 .dialog -- 弹窗

## CSS规范

1. tab 用两个空格表示
2. css的 :后加个空格， {前加个空格
3. 每条声明后都加上分号
4. 换行，而不是放到一行
5. 颜色用小写，用缩写, #fff
6. 小数不用写前缀, 0.5s -> .5s；0不用加单位
7. 尽量缩写， margin: 5px 10px 5px 10px -> margin: 5px 10px

- [google编码规范](https://google.github.io/styleguide/htmlcssguide.html)
- [bootstrap编码规范](http://codeguide.bootcss.com/)
- [Naming CSS Stuff Is Really Hard](https://seesparkbox.com/foundry/naming_css_stuff_is_really_hard)

## CSS 垂直居中

1. [设置padding](http://js.jirengu.com/tisil/1/edit)
2. [绝对定位实现居中](http://js.jirengu.com/caka/2/edit)
3. [vertical-align实现居中](http://js.jirengu.com/gojem/2/edit)
4. [table-cell实现居中](http://js.jirengu.com/gojem/1/edit)


## CSS伪类和伪元素

### 伪类

伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化。

a链接伪类的顺序L-V-H-A

- first-of-type:同种元素下的第一个。
- first-child：看是否是它父亲的第一个孩子。

### 伪元素

伪元素用于创建一些不在文档树中的元素，为其添加样式。

#### ：before :after
- element:before 在element内部创建一个行内元素，作为element的第一个孩子
- element:after 在element内部创建一个行内元素，作为element的最后一个个孩子
- 用:before :after 的目的是为了省标签
- 其中content 是必不可少


### 应用：

- 清除浮动
- [替代标签](http://js.jirengu.com/cozey/1/edit)
- [自定义checkbox](http://js.jirengu.com/bazi/1/edit?html,output)


### 参考文章

- [iconfont](https://zhuanlan.zhihu.com/p/22724856?refer=study-fe)
- [总结伪类和伪元素](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)
- [w3c](http://www.ayqy.net/doc/css2-1/selector.html#pseudo-elements)