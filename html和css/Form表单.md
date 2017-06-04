#### 1、form表单有什么作用？有哪些常用的input 标签，分别有什么作用？

    form表单用于提交数据，请求数据。
    input常用标签：
        type=text：单行文本域；
        type=password：密码域；
        type=checkbox：复选框；
        type=radio：单选框；
        type=option：下拉列表；
        type=textarea：多行文本域；
        type=button：按钮；
        type=submit：提交按钮；
        type=reset：重置表单的信息；
        type=file：文件上传；
        
#### 2、post 和 get 方式的区别？
- get向后台发数据会把所有请求数据以key=value的形式连接到一起，组装到url上，参数是通过query传递，传递信息有限；对于post通过body传送数据，url不会发生变化，数据会传输到后台。
- get内容大小会受到限制， 特定浏览器和服务器会对url长度进行限制，例如IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持；post传送数据量较大，但实际各个WEB服务器会规定对post提交数据大小进行限制，Apache、IIS6都有各自的配置。
- get常用于请求数据，post常用于向后台传数据。
- get安全性差，post安全性好。但get不会修改服务器的数据。
#### 3、在input里面，name有什么作用。
    name是提交数据时的索引。
    当type=checkbox or radio时，name相同为一组。
#### 4、radio如何分组？
    input的name相同即为一组
#### 5、placeholder有什么作用？
  placeholder属性提供可描述输入字段预期值的提示信息（hint）。该提示会在输入字段为空时显示，并会在字段获得焦点时消失。适用于以下的 <input> 类型：text, search, url, telephone, email 以及 password。
#### 6、type=hidden的用法？
    将这个input隐藏起来，但这个input的值仍然能在提交表单的时候提交到后台。可用于验证提交的表单信息，提高安全性。