//通过闭包来实现一个模块

var Person = (function(){
  var name = 'guyue';
  function sayName(){
    console.log(name);
  };//词法作用域
  return {
    name: name,
    sayName: sayName
  }
})()