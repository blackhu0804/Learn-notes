### form常用属性：
- action ：表单提交的地址。
- method ：提交表单的方法，有get和post两种。
```
<form action="/getInfo" method="get">
</form>
```

<form> 标签用于为用户输入创建 HTML 表单。
表单能够包含 input 元素，比如文本字段、复选框、单选框、提交按钮等等。
表单还可以包含 menus、textarea、fieldset、legend 和 label 元素。
表单用于向服务器传输数据。

多数情况下被用到的表单元素是输入标签<input>,输入类型是由类型属性（type）定义的。大多数经常被用到的输入类型如下：
###### 单行文本域：
``` html
<form>
    name: <input type="text" name="name"><br>
    password: <input type="password" name="password">
</form>
```
###### 单选按钮：
``` html
    <form>
        <input type="radio" name="sex" value="male">Male<br>
        <input type="radio" name="sex" value="female">Female
    </form>
```
###### 复选框：
``` html
<form>
    <input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
    <input type="checkbox" name="vehicle" value="Car">I have a car 
</form>
```
###### 预选下拉列表：
``` html
<form action="">
    <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab" selected>Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
</form>
```
###### 文本域：
``` html
<textarea rows="10" cols="30">
我是一个文本框。
</textarea>
```
[更多form属性](http://www.runoob.com/html/html-forms.html)