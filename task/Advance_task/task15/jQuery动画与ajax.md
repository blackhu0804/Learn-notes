## 题目1： jQuery 中， $(document).ready()是什么意思？

当DOM准备就绪时，指定一个函数来执行。只要DOM结构已完全加载时，脚本就可以运行。传递处理函数给.ready()方法，能保证DOM准备好后就执行这个函数，因此，这里是进行所有其它事件绑定及运行其它 jQuery 代码的最佳地方。

下面两种语法全部是等价的:
- $(document).ready(handler)
- $(handler)

## 题目2： $node.html()和$node.text()的区别?

- $node.html():返回所选择元素内的html，包含HTML标签和文本内容
- $node.text()：返回所选择元素内的文本内容，不包含HTML标签

## 题目3： $.extend 的作用和用法? 