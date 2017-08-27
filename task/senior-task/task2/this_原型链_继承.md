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

(img)[https://jiantuku.com/#/albums/10029]