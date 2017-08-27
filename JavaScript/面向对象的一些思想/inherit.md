# 继承

> 继承是指一个对象直接使用另一对象的属性和方法

JavaScript并不提供原生的继承机制，我们自己实现的方式很多，介绍一种最为通用的
通过上面定义我们可以看出我们如果实现了两点的话就可以说我们实现了继承

1. 得到一个类的属性
2. 得到一个类的方法

先定义两个类
```js
	function Person(name, age){
		this.name = name;
		this.age = age;
	}                

	Person.prototype.sayName = function(){
		console.log('My name is ' + this.name)
	}     

	Person.prototype.walk = function(){
		console.log(this.name + ' is walking')
	}

	function Student(name,age,sex){
		this.sex = sex;
	}

	Student.prototype.doing = function(){
		console.log('I am studing')
	}
```

## 属性获取
```js
	function Person(name, age){
		this.name = name;
		this.age = age;
	}                

	Person.prototype.sayName = function(){
		console.log('My name is ' + this.name)
	}     

	Person.prototype.walk = function(){
		console.log(this.name + ' is walking')
	}

	var p = new Person('suyu', 20)

	function Student(name,age,sex){
		Person.bind(this)(name,age);
		this.sex = sex;
	}

	Student.prototype.doing = function(){
		console.log('I am studing')
	}

	var s = new Student('suyu',2,'boy')
```

## 方法获取

```js
	function Person(name, age){
		this.name = name;
		this.age = age;
	}                

	Person.prototype.sayName = function(){
		console.log('My name is ' + this.name)
	}     

	Person.prototype.walk = function(){
		console.log(this.name + ' is walking')
	}

	var p = new Person('suyu', 20)

	function Student(name,age,sex){
		Person.bind(this)(name,age);
		this.sex = sex;
	}
	//第一种方法，可用于不支持es5的浏览器
	function fn(){}
	fn.prototype = Person.prototype
	Student.prototype = new fn()

	//2.需要兼容es5
	//Student.prototype = Object.create(Person.prototype);
	Student.prototype.constructor = Student;

	Student.prototype.doing = function(){
		console.log('I am studing')
	}

	var s = new Student('suyu',2,'boy')
```

## hasOwnProperty

`hasOwnPerperty`是`Object.prototype`的一个方法，可以判断一个对象是否包含自定义属性而不是原型链上的属性，hasOwnProperty是JavaScript中唯一一个处理属性但是不查找原型链的函数

```js
s.hasOwnPerperty('name')    //true
s.hasOwnPerperty('doing')   //false
s.hasOwnPerperty('walk')    //false
```