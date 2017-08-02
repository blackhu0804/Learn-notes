## 定时器

JavaScript提供定时执行代码的功能，叫做定时器（timer），主要由setTimeout()和setInterval()这两个函数来完成。

### setTimeout()
setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。执行一次，它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。
```js
var timerId = setTimeout(func|code, delay)
```

### setInterval()
setInterval函数的用法与setTimeout完全一致，区别仅仅在于setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。只有一个id。

```js
<input type="button" onclick="clearInterval(timer)" value="stop">

<script>
  var i = 1
  var timer = setInterval(function() {
    console.log(2);
  }, 1000);
</script>
```

上面代码表示每隔1000毫秒就输出一个2，直到用户点击了停止按钮

### clearTimeout()，clearInterval()

setTimeout和setInterval函数，都返回一个表示计数器编号的整数值，将该整数传入clearTimeout和clearInterval函数，就可以取消对应的定时器。

```js
var id1 = setTimeout(f,1000);
var id2 = setInterval(f,1000);

clearTimeout(id1);
clearInterval(id2);
```

## 异步

```js
        function 排队取号(通知我) {
            var id = setTimeout(function f2(){
                通知我('你的号码是222');
            },2000);
            return id;
        }

        //上面和下面分开
        var 我的号 = undefined
        
        function 通知我(result) {
            console.log(result)
            我的号 = result
        }

        排队取号(通知我);
```

贼坑的三道题：
```js
    for(var i = 0;i < 5;i++){
        (function(i) {
            setTimeout(function(){
                console.log(i);
            },i*1000)
        })(i)
    }
    //output:每隔1s输出0 1 2 3 4
    //拆分代码
    // for(var i = 0;i < 5;i++){
    //     var t2 = function(){
    //         console.log(i);
    //     }
    //     var t1 = function(i) {
    //         setTimeout(t2,i*1000)
    //     }
    //     t1(i)
    // }


    for(var i = 0;i < 5;i++){
        (function() {
            setTimeout(function(){
                console.log(i);
            },i*1000)
        })(i)
    }
    //output:每隔1s输出 5 5 5 5 5
    //代码拆分：
    // for(var i = 0;i < 5;i++){
    //     var t1 = function() {
    //         setTimeout(t2,i*1000)
    //     }
    //     var t2 = function(){
    //             console.log(i);
    //         }
    //     t1(i)
    // }



    for(var i = 0;i < 5;i++){
        setTimeout((function(i){
            console.log(i)
        })(i),i*1000);
    }
    //output: 同时输出0 1 2 3 4
    //代码拆分
    // for(var i = 0;i < 5;i++){
    //     var t1 = function(i){
    //         console.log(i)
    //     }
    //     t1(i) = undefined;
    //     setTimeout(undefined,i*1000);
    // }
```