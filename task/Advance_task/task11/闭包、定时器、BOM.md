## 题目1: 下面的代码输出多少？修改代码让 fnArr[i]() 输出 i。使用 两种以上的方法

```js
    //方法1：
    var fnArr = [];
    for (var i = 0; i < 10; i ++) {
        fnArr[i] = function(i) {
            return function(){
                return i;
            }
        }(i)
    }
    console.log( fnArr[3]() );
    //方法2：
    var fnArr = [];
    for (var i = 0; i < 10; i ++) {
        !function(i){
           fnArr[i] = function(){
               return i;
           }
        }(i)
    }
    console.log( fnArr[3]() );
```

## 题目2： 封装一个汽车对象，可以通过如下方式获取汽车状态
```js
var Car = (function(){
    var speed = 0;
    function setSpeed(s){
        speed = s
    }
    
    function getSpeed(){
    	console.log(speed)
    }

    function accelerate(){
    	return speed += 10
    }

    function decelerate(){
    	if (speed > 0) {
    		return speed -= 10
    	}
    }

    function getStatus() {
    	if (speed > 0 ) {
    		console.log('running') 
    	}else{
    		console.log('stop')
    	}
    }

    return {
        setSpeed: setSpeed,
        getSpeed: getSpeed,
        accelerate: accelerate,
        getStatus: getStatus,
        decelerate: decelerate
    }
})()

    Car.setSpeed(30);
    Car.getSpeed(); //30
    Car.accelerate();
    Car.getSpeed(); //40;
    Car.decelerate();
    Car.decelerate();
    Car.getSpeed(); //20
    Car.getStatus(); // 'running';
    Car.decelerate(); 
    Car.decelerate();
    Car.getStatus();  //'stop';
    //Car.speed;  //error
```

## 题目3：下面这段代码输出结果是? 为什么?
```js
	var a = 1;
	setTimeout(function(){
	    a = 2;
	    console.log(a);
	}, 0);
	var a ;
	console.log(a);
	a = 3;
	console.log(a);
    //output: 1    3    2
    //代码拆分
    /*
        var a = 1;
        var f = function(){
	    a = 2;
	    console.log(a);
	}
	setTimeout(f, 0);//最后执行
	var a ;
	console.log(a);//先执行
	a = 3;
	console.log(a);//第二个执行
    */
```

## 题目4：下面这段代码输出结果是? 为什么?
```js
    var flag = true;
    setTimeout(function(){
        flag = false;
    },0)
    while(flag){}//死循环,不会输出
    console.log(flag);//不执行
```

## 题目5： 下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）

```js
    for(var i=0;i<5;i++){
        setTimeout(function(){
            console.log('delayer:' + i );
        }, 0);
        console.log(i);
    }

    //实现：
	for(var i=0;i<5;i++){
		!function(i) {
			setTimeout(function(){
	         console.log('delayer:' + i );
			}, 0)
		}(i)
		console.log(i);
	}
```

## 题目6： 如何获取元素的真实宽高

```js
//先获取一个元素节点，利用window对象的getComputedStyle来获取css属性
var node = document.querySelector('#a')
window.getComputedStyle(node,null).getPropertyValue('width')
window.getComputedStyle(node,null).getPropertyValue('height')
```
(具体API)[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle]
## 题目7：为什么要编码？ URL 如何编码解码？
- 为什么要编码？

URL 只能使用 ASCII 字符集来通过因特网进行发送。    
也就是说URL只能使用英文字母、阿拉伯数字和某些标点符号，不能使用其他文字和符号。

这意味着 如果URL中有汉字，就必须编码后使用。
但是麻烦的是 标准的国际组织并没有规定具体的编码方法，而是交给应用程序（浏览器）自己决定。
这导致"URL编码"成为了一个混乱的领域。

- 如何编码？
    - encodeURI / encodeURIComponent 用于编码     
    - decodeURI / decodeURIComponent 用于解码

`encodeURIComponent()`与`encodeURI()`的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码。


## 题目8： 补全如下函数，判断用户的浏览器类型
```js
	function isAndroid(){
		return /AAndroid/.test(navigator.userAgent)
	}
	function isIphone(){
		return /Iphone/.test(navigator.userAgent)
	}
	function isIpad(){
		return /Ipad/.test(navigator.userAgent)
	}
	function isIOS(){
		return /Iphone|Ipad/.test(navigator.userAgent)
	}
```

