# 设计模式

- 构造函数模式 `constructor`
- 工厂模式  `factory`
- 混合模式  `mixin`
- 模块模式  `module`
- 单例模式  `singleton`
- 发布订阅模式  `publish/subscibe`

1. 构造函数

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  return this.name;
}
var student = new Person('古月', '20');
console.log(student.sayName());
```

2. 工厂模式 factory

```js
function createPerson(name) {
  var person = {
    name: name,
    sayName: function(){
      console.log(this.name);
    }
  };
  return person;
}
createPerson('guyue').sayName(); //guyue
```

3. 单例模式  `singleton`

```js
var People = (function(){
  var instance;
  function init(name) {
    return {
      name: name
    }
  }//词法作用域 function可访问的上下文由它所定义的位置所体现
  return {
    createPoople: function(name) {
      if(!instance) {//只会执行一次
        instance = init(name);
      }
      return instance;
    }
  }
})();

People.createPoople('guyue'); //{name: 'guyue'}
People.createPoople('hello'); //{name: 'guyue'}
```

4. 混合模式 `mixin`
```js
var Person = function(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype.sayName = function() {
  console.log(this.name);
}

var Student = function(name, age, score){
  Person.call(this, name, age);
  this.score = score;
}

Student.prototype = create(Person.prototype);

function create(parentObj) {
  function F(){}
  F.prototype = parentObj;
  return new F();
}

Student.prototype.sayScore = function() {
  console.log(this.score);
}; 

var student = new Student('古月', 20, 100);
student.sayName();
student.sayScore();
```
          