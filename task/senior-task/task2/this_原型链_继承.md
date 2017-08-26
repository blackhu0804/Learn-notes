# this 相关问题

[阮一峰教程](http://javascript.ruanyifeng.com/oop/this.html#toc3)

问题1： `apply`、`call` 、`bind`有什么作用，什么区别?

- `function.prototype.call()`

函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。随后的参数作为argumenst传入
```js
var obj = {};

var f = function () {
  return this;
};

f() === this // true
f.call(obj) === obj // true
```

- `function.prototype.apply()`

apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。
```js
func.apply(thisValue, [arg1, arg2, ...])
```