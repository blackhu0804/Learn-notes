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

`apply`方法的第一个参数也是this所要指向的那个对象，如果设为`null`或`undefined`，则等同于指定全局对象。第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在`call`方法中必须一个个添加，但是在`apply`方法中，必须以数组形式添加。

- `function.prototype.bind()`

`bind`方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。


## 问题2： 以下代码输出什么?
```js
var john = { 
  firstName: "John" 
}
function func() { 
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi()  //join: hi!


//john.sayHi = func 使john.sayHi() = func(),但是func()中的this指向是window，而john.sayHi()的this指向是john这个对象
```

## 问题3： 下面代码输出什么，为什么

```js
func() 
function func() { 
  alert(this)
}
//[object Window]
//函数被直接调用this绑定到全局对象，浏览器中，window就是该全局对象
```

## 4、下面代码输出什么
```js
document.addEventListener('click', function(e){
    console.log(this);
    setTimeout(function(){
        console.log(this);
    }, 200);
}, false);
/*
  output:
    document
    window
*/
//第一个console.log中this指向点击的对象，setTimeout中this指向全局对象。
```

## 问题5：下面代码输出什么，why

```js
var john = { 
  firstName: "John" 
}

function func() { 
  alert( this.firstName )
}
func.call(john)
//John
//函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
```

## 问题6： 以下代码有什么问题，如何修改
```js
var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么，指向$btn
      this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}

//修改

var module= {
  bind: function(){
    _this = this
    $btn.on('click', function(){
      _this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}
```

# 原型链相关问题

## 问题7：有如下代码，解释Person、 prototype、__proto__、p、constructor之间的关联。

```js
function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log('My name is :' + this.name);
}
var p = new Person("若愚")
p.sayName();
```

`Person`是一个构造函数，函数自动获得属性`Prototype`，`Prototype`里有一个`constructor`属性指向`Person`，p是`new`出来的一个Person实例，这个实例会有一个`__proto__`属性，指向`prototype`属性

## 问题8： 上例中，对对象 p可以这样调用 p.toString()。toString是哪里来的? 画出原型图?并解释什么是原型链。

(img)[https://github.com/hu970804/Learn-notes/blob/master/html%E5%92%8Ccss/img/20170827162100.png]

`p`并没有toString()方法，p会通过`__proto__`到对象`Person`的`prototype`中去寻找，如果没有，再从`prototype`的`__proto__`中去寻找，找到`toString()`方法

(原型图)[https://github.com/hu970804/Learn-notes/blob/master/html%E5%92%8Ccss/img/5995182-0be3787620e75769.png]

`p`可以调用`toString()`就是通过原型，原型的原型一级一级向上查找，最终在Object中找到。这就是原型链

## 问题9：对String做扩展，实现如下方式获取字符串中频率最高的字符

```js
String.prototype.getMostOften = function() {
	var obj = {};
	for(var i = 0;i < this.length;i++){
		var key = this[i];
		if(obj[key]){
			obj[key]++;
		}else{
			obj[key] = 1;
		}
	}

	var count = 0;
	var maxKey;
	for(var key in obj){
		if(obj[key] > count){
			maxKey = key;
			count = obj[key];
		}
	}
	return maxKey + ', 因为 ' + maxKey + ' 出现了' + count + '次';
};

var str = 'ahbbccdeddddfg';
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次
```

## 问题10： instanceOf有什么作用？内部逻辑是如何实现的？

`instanceof`操作符，判断一个对象是不是某个类型的实例

内部逻辑：

`instanceof` 运算符用来检测 `constructor.prototype` 是否存在于参数 `object` 的原型链上。


# 继承相关问题

## 问题11：继承有什么作用?

继承是指一个对象直接使用另一对象的属性和方法

## 问题12： 下面两种写法有什么区别?

```js
//方法1
function People(name, sex){
    this.name = name;
    this.sex = sex;
    this.printName = function(){
        console.log(this.name);
    }
}
var p1 = new People('饥人谷', 2)   //每次new都要创建一个新的printName方法

//方法2
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.printName = function(){
    console.log(this.name);
}
var p1 = new Person('若愚', 27);  //共用一个原型上的printName
```

## 问题13： Object.create 有什么作用？兼容性如何？

`Object.create()` 方法会使用指定的原型对象及其属性去创建一个新的对象。

(兼容性)[http://www.jianshu.com/p/d77da76d0fcd]

## 问题14： hasOwnProperty有什么作用？ 如何使用？

`hasOwnPerperty`是`Object.prototype`的一个方法，可以判断一个对象是否包含自定义属性而不是原型链上的属性，`hasOwnProperty`是JavaScript中唯一一个处理属性但是不查找原型链的函数。

```js
function Person(name){
  this.name = name;
}

Person.prototype.sayName = function(){
  console.log(this.name)
}

var p = new Person('Brain')

p.hasOwnPerperty('name');   //true
p.hasOwnPerperty('sayName');   //false
```

## 问题15：如下代码中call的作用是什么?
```js
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}
function Male(name, sex, age){
    Person.call(this, name, sex);    //这里的 call 有什么作用
    //使Person方法在在Male的作用域中执行。
    this.age = age;
}
```

## 问题16： 补全代码，实现继承 

```js
function Person(name, sex){
    // todo ...
    this.name = name;
    this.sex = sex;
}

Person.prototype.getName = function(){
    // todo ...
    console.log(this.name)
};    

function Male(name, sex, age){
   //todo ...
   Person.bind(this)(name, sex);
   this.age = age;
}

Male.prototype = Object.create(Person.prototype);
Male.prototype.constructor = Male; 
//todo ...
Male.prototype.getAge = function(){
    //todo ...
    console.log(this.age);
};

var suyu = new Male('suyu', '男', 20);
suyu.getName();
```