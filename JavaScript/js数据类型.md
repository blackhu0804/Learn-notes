## js数据类型分类

- 数值（number）：整数和小数（比如1和3.14）
- 字符串（string）：字符组成的文本（比如"Hello World"）
- 布尔值（boolean）：true（真）和false（假）两个特定值
- undefined：表示“未定义”或不存在，即此处目前没有任何值
- null：表示空缺，即此处应该有一个值，但目前为空
- 对象（object）：各种值组成的集合

### typeof运算符

JavaScript有三种方法，可以确定一个值到底是什么类型。

- typeof运算符

```JavaScript
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
```

```JavaScript
function f() {}
typeof f
// "function"

typeof undefined
// "undefined"

typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null // "object"
```

- instanceof运算符

    区分数组和对象：
```JavaScript
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```


- Object.prototype.toString方法

### null和undefined

`null`与`undefined`都可以表示“没有”，含义非常相似。将一个变量赋值为`undefined`或`null`，老实说，语法效果几乎没区别。


var a = undefined;
var a = null;


上面代码中，a变量分别被赋值为`undefined`和`null`，这两种写法的效果几乎等价。

在`if`语句中，它们都会被自动转为`false`，相等运算符（`==`）甚至直接报告两者相等。

```JavaScript
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true

```
上面代码说明，两者的行为是何等相似！Google公司开发的JavaScript语言的替代品Dart语言，就明确规定只有`null`，没有`undefined`！

### 用法和含义

对于`null`和`undefined`，可以大致像下面这么理解。

`null`表示空值，即该处的值现在为空。典型用法是：

- 作为函数的参数，表示该函数的参数是一个没有任何内容的对象。
- 作为对象原型链的终点。

```JavaScript
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

### Boolean

布尔值代表真和假两个状态，真用关键字`true`表示，假用关键字`false`表示。

下列运算符会返回布尔值：

- 两元逻辑运算符： && (And)，|| (Or)
- 前置逻辑运算符： ! (Not)
- 相等运算符：===，!==，==，!=
- 比较运算符：>，>=，<，<=

### 转换为false的类型

如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。

- undefined
- null
- false
- 0
- NaN
- ""（空字符串）

```JavaScript
if ('') {
  console.log(true);
}
// 没有任何输出

if ([]) {
  console.log(true);
}
// true

if ({}) {
  console.log(true);
}
// true
```

上面代码的`if`命令后面的判断条件，预期应该是一个布尔值，所以JavaScript自动将空字符串，转为布尔值`false`，导致程序不会进入代码块，所以没有任何输出。


### Number

JavaScript的数字类型和其它语言有所不同，没有整型和浮点数的区别，统一都是Number类型，可以表示十进制、八进制、十六进制.

```JavaScript
var a = 10; //十进制
var b = 073; //八进制
var c = 0xf3; //十六进制
```

### 浮点数

浮点数是指数字包含小数点，小数点后至少有一位数字(没有或者是0会转为整数)，前面可以没有

```JavaScript
var a = 0.27;
var b = .45;
```
对于极大或极小的数字可以使用科学计数法
```JavaScript
var a = 3.1e5; //310000
```
浮点数最高精度是17位，但是在计算的时候精度不如整数
```JavaScript
	1 - 0.9; // 0.09999999999999998
	0.1 + 0.2; //0.30000000000000004
```

### Infinity（无穷大）

`1/0  //Infinity`

### NaN

NaN含义是Not a Number，表示非数字，NaN和任何值都不相等，包括自己
```JavaScript
    NaN == NaN; //false
    parseInt('abc'); //NaN
```

## 数值转换

1. Number()
2. parseInt()
3. parseFloat()

    - 忽略字符串前面的空白字符，找到第一个非空白字符
    - 如果第一个字符不是-或者数字返回NaN
    - 如果是继续解析，直到非数值模式为止
    - 0开头会当做八进制，0x开头会当做十六进制，但是可以指定第二个参数指定基数
    ```JavaScript
    parseInt('blue'); //NaN
	parseInt('-23ABS'); // -23
	parseInt('0xf1'); // 241
	parseInt('101', 2); // 5
    ```

## String

String是Unicode字符组成的序列，俗称字符串，可以用双引号或者单引号表示，没有区别，匹配即可

```JavaScript
var str = 'hello';
var str2 = "jirengu";
var str3 = 'hello "ruoyu" ';
```

## Object

对象，就是一种无序的数据集合，由若干个“键值对”（key-value）构成。key我们称为对象的属性，value可以是任何JavaScript类型，甚至可以是对象

```JavaScript
var obj = {
    name: 'jirengu',
    age: 2
  };

    obj.name;
    obj['name'];
```