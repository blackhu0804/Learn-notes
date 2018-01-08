## JavaScript

- Q：解释下 JavaScript 中 `this` 是如何工作的。

- A：

  - 作为函数调用，`this`绑定全局对象，浏览器中是window；
  - 内部函数的内部函数的`this`指向全局对象，如果要绑定到外部函数所对应的对象上，一般用变量`that`替换`this`；
  - 作为构造函数，`this`绑定到新创建的构造函数上
  - `apply`,`call` 切换函数执行上下文环境，修改`this`的指向

- Q：解释下原型继承的原理。

- A：原型继承的基础就是原型链的查找。原型链查找的基本概念：

  1. 每一个函数 F 都有一个原型对象（prototype） 

  2. 每一个函数都可以通过`new`关键字化身成为一个类构造函数，`new F`会产生一个新的对象`O`。

  3. 在调用对象的某个属性或者方法，会先查找对象自身是否有这个属性，如果没找到就会去对象的构造函数的原型对象中查找。也就是查找`o`的构造函数`F`的`prototype`。

  4. 实例的`__proto__` === 函数的`prototype`

     ```javascript
     	var Foo = function(){
             this.name = "foo";
         }
         Foo.prototype.say = function(){
             alert("Hello World!");
         }
         var foo = new Foo();
         console.log(foo.__proto__); //私有链接,指向构造函数的原型
         console.log(Foo.prototype);  
         console.log(foo.__proto__ === Foo.prototype); //true
         console.log(foo.__proto__.constructor === Foo); //true
     ```

- Q:什么是闭包，如何使用它，为什么要使用它？

- A:

  > 闭包 = 函数 + 函数能够访问的自由变量

```javascript
//没有使用闭包
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();
//3 3 3
```

```javascript
//使用了闭包
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();
//0 1 2
```

- Q：什么是 `"use strict";` ? 使用它的好处和坏处分别是什么？

- A：

  > 严格模式是ES5引入的，更好的将错误检测引入代码的方法。顾名思义，使得JS在更严格的条件下运行。

	1. 变量必须先声明，后使用
	2. 不能对变量执行delete操作
	3. 对象的属性名不能重复