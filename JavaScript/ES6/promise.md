# Promise book

## 1. 什么是 Promise ？

> promise的功能是可以将复杂的异步处理轻松地进行模式化， 说得上是使用promise的理由之一。

### 创建一个 Promise 对象：

目前大致有三种类型：

1. Constructor

>　 Promise类似于 XMLHttpRequest，从构造函数 Promise 来创建一个新建新promise对象作为接口。要想创建一个promise对象、可以使用new来调用Promise的构造器来进行实例化。

```javaScript
var promise = new Promise(function(resolve, reject){
  // 异步处理
  // 处理结束后，调用resolve和reject
})
```
2. Instance Method

> 对通过new生成的promise对象为了设置其值在 `resolve(成功)` / `reject(失败)` 时调用的回调函数 可以使用`promise.then() ` 实例方法。

```javaScript
promise.then(onFulfilled, onRejected) 
  // resolve(成功)时，onFulfilled 会被调用
  // reject(失败)时，onRejected 会被调用
  // onFulfilled、onRejected 两个都为可选参数。
  // 只对异常处理可采用 promise.then(undefined, onRejected) 这种方式，但更推荐下面的方式
```

> 只对异常进行处理

```javaScript
promise.catch(onRejected) 
```

3. Static Method

像 `Promise` 这样的全局对象还拥有一些静态方法。

包括 `Promise.all()` 还有 `Promise.resolve()` 等在内，主要都是一些对`Promise`进行操作的辅助方法。

#### 创建 promise 对象流程

1. `new Promise(fn)`返回一个 `Promise` 对象
2. 在 `fn` 中指定异步等处理
  - 处理结果正常，调用`resolve`
  - 处理结果错误，调用`reject`

例如用Promise来通过异步处理方式来获取XMLHttpRequest(XHR)的数据。
```javaScript
function getURL(URL){
  return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest()
    req.open('GET',URL,true)
    req.onload = function () {
      if(req.status === 200){
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    };

    req.onerror = funtion() {
      reject(new Error(req.statusText))
    }
    req.send()
  })
}

// 运行实例
var URL = "http://httpbin.org/get"
getURL(URL).then( function onFulfilled(value){
  console.log(value)
}).catch( function onRejected(error){
  console.error(error)
})
```

### 实战Promise

1. `Promise.resolve`

- `new Promise` 的快捷方式

> 静态方法`Promise.resolve(value)` 可以认为为`new Promise()`的快捷方式

```javaScript
Promise.resolve(24);
// 可以认为是以下的语法糖
new Promise(function(resolve) {
  resolve(24)
})
```

2. `Promise.reject`

- `new Promise` 的快捷方式

> 静态方法`Promise.reject(error)` 可以认为为`new Promise()`的快捷方式

```javaScript
Promise.reject(new Error('error'))
// 可以认为是以下的语法糖
new Promise(funtion(resolve){
  reject(new Error('error'))
})
```

3. Promise只能进行异步操作？

    执行顺序  

```javaScript
var promise = new Promise(function (resolve){
    console.log("inner promise"); // 1
    resolve(42);
});
promise.then(function(value){
    console.log(value); // 3
});
console.log("outer promise"); // 2

// 输出
inner promise // 1
outer promise // 2
42            // 3
```

4. `Promise#then`

> `Promise`可以写成方法链的形式

```javaScript
Promise.then(function taskA(){
  console.log('taskA')
}).then(function taskB(){
  console.log('taskB')
}).catch(function onRejected(error){
  console.log(error)
})
``` 

5. `Promise#catch`

```javaScript
var promise = new Promise(function(resolve, reject){
    reject('error')
});
promise.then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.error(error);
});

// 输出： error
```
> 这是一个等价于 `promise.then(undefined, onRejected)` 的语法糖。

6. `Promise.all`

> `Promise.all` 接收一个 `promise` 对象的数组作为参数，当这个数组里的所有 `promise` 对象全部变为`resolve`或`reject`状态的时候，它才会去调用 `.then `方法。

```javaScript
function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
var startDate = Date.now();
// 所有promise变为resolve后程序退出
Promise.all([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
]).then(function (values) {
    console.log(Date.now() - startDate + 'ms');
    // 約128ms
    console.log(values);    // [1,32,64,128]
});

// 输出：
// 129ms
// 1,32,64,128
```

7. `Promise.race`

> `Promise.all` 在接收到的所有的对象`promise`都变为` FulFilled `或者 `Rejected` 状态之后才会继续进行后面的处理， 与之相对的是 `Promise.race` 只要有一个`promise`对象进入 `FulFilled` 或者 `Rejected` 状态的话，就会继续进行后面的处理。

```javaScript
function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
// 任何一个promise变为resolve或reject 的话程序就停止运行
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
]).then(function (value) {
    console.log(value);    // => 1
});
```