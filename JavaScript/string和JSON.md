# 字符串

> 字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。
```js
'abc'
"abc"
```
> 单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。
```js
'key="value"'
"It's a long journey"
```

### 转义

```js
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

### 常见的字符串方法

```js
	var str = 'hello';
	var str2 = ' world';
	console.log(str + str2);//hello world

	console.log(str.length);//5
	console.log(str[str.length - 1]);//o
	'a'.charCodeAt(0);//获取一个字符的ASCII码

	//字符串的截取
	var str3 = 'hello world';
	var sub1 = str3.substr(1,3);//第一个是开始位置， 第二个是长度 	ell
	var sub2 = str3.substring(1,3);//第一个是开始位置，第二个是结束位置	el

	//查找
	var str4 = "hello my world";
    var s1 = str4.search('my');   //6 找不到为-1
    var s2 = str4.replace('my', 'your'); //
    var s3 = str4.match('my'); //返回匹配的数组

    //大小写
    str.toUpperCase();
    str.toLowerCase();

    //判断回文
    function isReverse(str) {
    	return str = str.split('').reverse().join('');
    }
```

# JSON

> JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于JavaScript（Standard ECMA-262 3rd Edition - December 1999）的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(网络传输速度)。

## 举例
```js
var str = '{"name":"suyu","age": 30}'
var obj = JSON.parse(str)
console.log(obj.name)
console.log(JSON.stringify(obj))

var obj = {
	"name": "suyu",
	"age": 20,
	"2345": 'hello'
}
console.log(obj.name);
console.log(obj['2345'])

//遍历

var people = {
     "firstName": "John",
     "lastName": "Smith",
     "sex": "third",
     "age": 25,
     "address": 
     {
         "streetAddress": "21 2nd Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
     },
     "phoneNumber": 
     [
         {
           "type": "home",
           "number": "212 555-1234"
         },
         {
           "type": "fax",
           "number": "646 555-4567"
         }
    ]
}

for(var key in people){
	console.log("key",":",people[key])
}

//1.写一个函数，得到一个字符串里面出现最多的字符
var str2 = "hello world, hahhhha hha"
var dict = {}
for(var i = 0; i < str2.length; i++){
	if (dict[str2[i]]) {
		++dict[str2[i]]
	}else {
		dict[str2[i]] = 1
	}
}
var count = 0;
var maxValue;
for(key in dict){
	if(dict[key] > count){
		maxValue = key;
		count = dict[key];
	}
}
console.log(count,maxValue)

```
