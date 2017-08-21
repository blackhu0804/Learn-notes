## 问题1： OOP 指什么？有哪些特性

> 面向对象程序设计（英语：Object-oriented programming，缩写：OOP）是种具有对象概念的程序编程范型，同时也是一种程序开发的抽象方针。它可能包含数据、属性、代码与方法。对象则指的是类的实例。它将对象作为程序的基本单元，将程序和数据封装其中，以提高软件的重用性、灵活性和扩展性，对象里的程序可以访问及经常修改对象相关连的数据。在面向对象程序编程里，计算机程序会被设计成彼此相关的对象

特性：

- 封装：将一个类的使用和实现分开，只保留部分接口和方法与外部联系
- 继承：子类继承父类中的属性和方法，并可以添加新的属性和方法，对部分属性和方法进行重写。
- 多态：多态性就是程序中同名的不同方法共存。

## 问题2： 如何通过构造函数的方式创建一个拥有属性和方法的对象? 

```js
function Person(name){
  this.name = name;
  this.say = function(){
    console.log("my name is" + this.name)
  }
}

var name = new Person('name')
name.say()
//my name is name
```

## 问题3： prototype 是什么？有什么特性 

- 每个函数都有一个prototype属性，这个属性是指向一个对象的引用，这个对象称为原型对象，原型对象包含函数实例共享的方法和属性，也就是说将函数用作构造函数调用（使用new操作符调用）的时候，新创建的对象会从原型对象上继承属性和方法。

特性：
```js
function Person(name){
  this.name=name;
}

Person.prototype.printName=function(){
  alert(this.name);
}

var person1=new Person('Byron');
var person2=new Person('Frank');
```
- 只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性
- 默认情况下prototype属性会默认获得一个constructor(构造函数)属性，这个属性是一个指向prototype属性所在函数的指针
- Person的实例person1中包含了name属性，同时自动生成一个`__proto__`属性，该属性指向Person的prototype，可以访问到prototype内定义的printName方法

## 问题4：画出如下代码的原型图
```js
function Person(name){
  this.name=name;
}

Person.prototype.printName=function(){
  alert(this.name);
}

var person1=new Person('Byron');
var person2=new Person('Frank');
```

## 问题5： 创建一个 Car 对象，拥有属性name、color、status；拥有方法run，stop，getStatus 
```js
function Car(){
  this.name = name;
  this.color = color;
  this.status = status;
}

Car.prototype.run = function(){
  console.log('run');
}
Car.prototype.stop = function(){
  console.log('stop');
}
Car.prototype.getStatus = function(){
  console.log('status');
}

var car = new Car('Ben','white','run')
car.run()
car.stop()
car.getStatus()
```

## 问题6： 创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。拥有以下属性和方法


