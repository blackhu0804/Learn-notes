# What's this?

由于运行期绑定的特性，JavaScript 中的 `this` 含义非常多，它可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式

随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则，那就是this指的是，调用函数的那个对象

## 作为函数调用

在函数被直接调用时this绑定到全局对象。在浏览器中，window 就是该全局对象

```js
console.log(this);  //Window

function fn1(){
    function fn2(){
      console.log(this);
    }
}

fn1();  //Window

```

## 嵌套调用

函数嵌套产生的内部函数的`this`不是其父函数，仍然是全局变量

```js
console.log(this);  //Window

function fn1(){
    function fn2(){
      console.log(this);
    }
    fn2()
}

fn1();  //Window
```

## setTimeout、setInterval

获取document：

```js
document.addEventListener('click', function(e){
  console.log(this);
  var _this = this;
  setTimeout(function(){
      console.log(_this);
  }, 200);
}, false);
```

## 作为对象方法调用

在 JavaScript 中，函数也是对象，因此函数可以作为一个对象的属性，此时该函数被称为该对象的方法，在使用这种调用方式时，this 被自然绑定到该对象

```js
var obj1 = {
    name: 'Byron',
    fn : function(){
        console.log(this);
    }
};

obj1.fn();//Object {name: "Byron", fn: function}

var fn2 = obj1.fn;

fn2(); //window，相当于window.fn2()
```

## Function.prototype.bind

bind，返回一个新函数，并且使函数内部的this为传入的第一个参数

```js
document.addEventListener('click', function(e){
  console.log(this);
  setTimeout(function(){
      console.log(this);
  }.bind(this), 200);
}, false);
```

## 使用call和apply设置this

```js
	var value = 100;
	var obj = {
		value: 200
	}

	function fn(a,b){
		console.log(this.value + a + b)
	}

	fn(3,4)	//107

	fn.call(obj,3,4)	//207
	fn.apply(obj, [3,4])  //207
```

得到一个数组的最大值
```js
var arr = [1,3,12,3]
console.log( Math.max.apply(null, arr) )  //12
```

拼接字符串
```js
	function joinStr(){
		//1.
		console.log( Array.prototype.join.call(arguments, '-'))
		//2.
		var join = Array.prototype.join.bind(arguments);
		console.log(join('-'))
	}

	joinStr('a','b','c')
```

## 三种变量

- 实例变量：（this）类的实例才能访问到的变量

- 静态变量：（属性）直接类型对象能访问到的变量

- 私有变量：（局部变量）当前作用域内有效的变量
```js
$function ClassA(){
    var a = 1; //私有变量，只有函数内部可以访问
    this.b = 2; //实例变量，只有实例可以访问
}

ClassA.c = 3; // 静态变量，也就是属性，类型访问

console.log(a); // error
console.log(ClassA.b) // undefined
console.log(ClassA.c) //3

var classa = new ClassA();
console.log(classa.a);//undefined
console.log(classa.b);// 2
console.log(classa.c);//undefined
```


## this的值到底是什么

JS（ES5）里面有三种函数调用形式：



```js
func(p1, p2) 
obj.child.method(p1, p2)
func.call(context, p1, p2) // 先不讲 apply
```

前两种可以等价地变为 call 形式：

```js
func(p1, p2) 等价于
func.call(undefined, p1, p2)

obj.child.method(p1, p2) 等价于
obj.child.method.call(obj.child, p1, p2)
```



至此我们的函数调用只有一种形式：

```js
func.call(context, p1, p2)
```

`this`，就是上面代码中的 context。

> 如果你传的 context 就 null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）



