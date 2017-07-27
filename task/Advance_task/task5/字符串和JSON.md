## 0.对于 HTTP 协议而言，HTML、CSS、JS、JSON 的本质都是什么？

- 超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器。所以HTML、CSS、JS、JSON 本质上都是符合通信格式的字符串。

## 1、使用数组拼接出如下字符串 ，其中styles数组里的个数不定

```js
	var prod = {
	    name: '女装',
	    styles: ['短款', '冬季', '春装']
	};
	function getTpl(data){
		//todo...   
		var str =  '<dl class="product">';
		str += '<dt>' + data.name + '</dt>';
		for(var i = 0;i<data.styles.length;i++) {
			str += '<dd>' + data.styles[i] + '</dd>';
		}
		str += '</dl>';
		return str;
	}
	var result = getTpl(prod);  //result为下面的字符串
	console.log(result);
```

## 2.写出两种以上声明多行字符串的方法

```js
//1：
var str = 
'abcdeabcdeabcdeancde\
abcdeabcdeabc\
deancdeabcdeab\
cdeabcdeancdeabc\
deabcdeabcdeancde'

//2:
var str = 'abcdeabcdeabcdeancde' 
+ 'abcdeabcdeabcde'
 + 'ancdeabcdeabcdeabcdean'+ 
'cdeabcdeabcdeabcdeancde'
```

## 3.补全如下代码,让输出结果为字符串: hello\\饥人谷

```js
var str = 'hello \\\\饥人谷'
console.log(str)
```

## 4、以下代码输出什么?为什么

```js
var str = 'jirengu\nruoyu'
console.log(str.length)
//13  \n 是转义字符算一个字符
```

## 5、写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是

```js
    function isReverse(str) {
		return str == str.split('').reverse().join('');
	}
	var str1 = 'abcdcba'
	var str2 = 'abcdcbb'
	isReverse(str1)
	isReverse(str2)
```

## 6、写一个函数，统计字符串里出现出现频率最多的字符

```js
	var str = 'hello world hahaha'
	var dict = {}
	function mostStr(str) {
		for(var i = 0;i < str.length;i++){
			if(dict[str[i]]){
				++dict[str[i]];
			} else {
				dict[str[i]] = 1;
			}
		}
		var count = 0;
		var MaxValue;
		for(key in dict) {
			if(dict[key] > count) {
				MaxValue = key;
				count = dict[key];
			}
	 	}
	 	console.log(count,MaxValue)
	}
	mostStr(str);
    //4 "h"
```

## 7.写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如
```js
    var str = 'background-color'
	function camelize(str) {
		var a = str.split('-')
		for(var i = 1;i < a.length;i++) {
			a[i] = a[i][0].toUpperCase() + a[i].substr(1);
		}
		return a.join('');
	}
	console.log(camelize(str));
    //backgroundColor
```

## 8、写一个 ucFirst函数，返回第一个字母为大写的字符 （***）

```js
    function ucFirst(str) {
		var a = str.split('');
		a[0] = a[0].toUpperCase();
		console.log(a.join(''));
	}
	var str = 'hunger';
	ucFirst(str);//Hunger
```

## 9、写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如

```js
    var str = 'hello world,hello world'
	function truncate(str, maxlength) {
		var a = str.split('');
		if (a.length > maxlength - 1) {
			str = str.substr(0,maxlength - 1);
			str += '...'
			console.log(str);
		} else {
			console.log(str);
		}
	}

	truncate(str,10)
    //hello wor...
	truncate(str,30)
    //hello world,hello world
```

## 10、什么是 JSON格式数据？JSON格式数据如何表示对象？window.JSON 是什么？

> JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于JavaScript（Standard ECMA-262 3rd Edition - December 1999）的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(网络传输速度)。

JSON 语法是 JavaScript 对象表示语法的子集。

- 数据在名称/值对中
- 数据由逗号分隔
- 花括号保存对象
- 方括号保存数组

JSON 数据的书写格式是：名称/值对，名称/值对组合中的名称写在前面（在双引号中），值对写在后面(同样在双引号中)，中间用冒号隔开：
```js
var json1 = {"name": "Byron", "age": "24"}

var json2 = [
    {"name": "Byron", "age": "24"}, 
    {"name": "Byron2", "age": "25"}
]
```
#### window.JSON
- window.JSON是浏览器的内置对象，用来检测对JSON的支持情况；
- JSON对象内置了JSON.parse()、JSON.stringify()；
- IE8版本以上才内置支持JSON.parse()函数方法。

## 11、如何把JSON 格式的字符串转换为 JS 对象？如何把 JS对象转换为 JSON 格式的字符串?

- parse：把字符串转化为JSON对象
- stringify：把JSON对象转化为字符串（出人意料的不叫toString，因为不是实例方法）

```js
var json = {
  "name": "Byron",
  "age": 24
};

var json_str = JSON.stringify(json);
console.log(json_str);
console.log(JSON.parse(json_str));
```