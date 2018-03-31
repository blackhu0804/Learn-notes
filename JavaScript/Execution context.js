/* 
  Execution context（执行上下文）
*/

console.log(a) // undefined
var a = 10
console.log(a) // 10

// var 声明变量会将声明前置，也就是下面样子
/* 
  var a
  console.log(a) // undefined
  a = 10
  console.log(a) // 10
*/

console.log(this) // Window

console.log(f1) // f1() {}
function f1() {} // 函数声明

console.log(f2) // undefined
var f2 = function() {} // 函数表达式

/* 
  * 变量、函数表达式声明，默认赋值为undefined
  * this、函数声明会直接被赋值
*/

var a = 10
function fn() {
  console.log(a) // a是自由变量，函数创建时，就确定a要取值的作用域
}

function bar(f) {
  var a = 20
  f()  // 10
}
bar(fn)


/* 
  重头戏 ===> this
*/

// 1. 构造函数
function Foo() {
  this.name = 'black'
  this.year = 1997

  console.log(this) // Foo { name: 'black', year: 1997 }
}

var f1 = new Foo()

// 2. 函数作为对象的一个属性
// 如果函数作为对象的一个属性， 并且作为对象的一个属性被调用时，函数中的this指向该对象
var obj = {
  x: 10,
  fn: function() {
    console.log(this) // { x: 10, fn: [Function: fn] }
    console.log(this.x) // 10
  }
}
obj.fn()

// 3. 函数用 call 或 apply 调用
var obj = {
  x: 10
}

var fn = function () {  
  console.log(this) // { x: 10 }
  console.log(this.x) //   10
}
fn.call(obj)

// 4. 全局 & 调用普通函数
/* 
  在全局环境下，浏览器中 this 永远是window
              Node 环境中 this 指向 global
 */


/* 
  闭包
  1. 函数作为返回值
  2. 函数作为参数传递
*/

// 1.
function fn4(){
  var max = 10
  return function bar(x) {
    if (x > max) {
      console.log(x)
    } 
  }
}

var f = fn4()
f(15) // 15


// 2
var max = 10
var fn5 = function (x) {
  if(x > max) {
    console.log(x)
  }
};

(function (f) {
  var max = 100
  f(15)
})(fn5) // 15
