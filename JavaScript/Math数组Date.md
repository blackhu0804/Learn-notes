## Math

> Math对象是JavaScript的内置对象，提供一系列数学常数和数学方法。Math对象只提供了静态的属性和方法，所以使用时不用实例化

Math对象提供以下一些只读的数学常数。
```js
Math.E // 2.718281828459045
Math.LN2 // 0.6931471805599453
Math.LN10 // 2.302585092994046
Math.LOG2E // 1.4426950408889634
Math.LOG10E // 0.4342944819032518
Math.PI // 3.141592653589793
Math.SQRT1_2 // 0.7071067811865476
Math.SQRT2 // 1.4142135623730951
```

方法：

```js
Math.round()//四舍五入

Math.abs()//求绝对值

Math.max()//求最大值
Math.min()//求最小值

Math.floor()//向下取整
Math.ceil()//向上取整

Math.random()//随机数0～1

    // 返回给定范围内的随机数
	function random(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//随机字符串
	function randomStr(len) {
		// body...
		var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
		var str = ''
		for(var i = 0;i < len;i++) {
			str += dict[random(0,62)]
		}
		return str;
	}
	//随机IP
	function randomIP() {
		var str = ''
		for(var i = 0;i < 3;i++) {
			str += random(0,256) + '.'
		}
		str += random(0,256);
		return str;
	}

```

## 数组

> 在程序语言中数组的重要性不言而喻，JavaScript中数组也是最常使用的对象之一，数组是值的有序集合，由于弱类型的原因，JavaScript中数组十分灵活、强大，不像是Java等强类型高级语言数组只能存放同一类型或其子类型元素，JavaScript在同一个数组中可以存放多种类型的元素，而且长度也是可以动态调整的，可以随着数据增加或减少自动对数组长度做更改。

构件数组的方式：

```js
//1.无参构造函数，创建一空数组
var a1 = new Array();
//2.一个数字参数构造函数，指定数组长度（由于数组长度可以动态调整，作用并不大），创建指定长度的数组：
var a2 = new Array(5);
//3.带有初始化数据的构造函数，创建数组并初始化参数数据
var a3 = new Array(4, 'hello', new Date());
//4.使用方括号，创建空数组，等同于调用无参构造函数
var a4 = [];
//5.使用中括号，并传入初始化数据，等同于调用带有初始化数据的构造函数
var a5 = [10];
```

### Array.isArray()
```js
//Array.isArray方法用来判断一个值是否为数组。它可以弥补typeof运算符的不足。
var a = [1, 2, 3];

typeof a // "object"
Array.isArray(a) // true
```

基本方法：
```js
//valueOf()，toString()
//valueOf方法返回数组本身
var a = [1, 2, 3];
a.valueOf() // [1, 2, 3]

//toString方法返回数组的字符串形式。
var a = [1, 2, 3];
a.toString() // "1,2,3"

var a = [1, 2, 3, [4, 5, 6]];
a.toString() // "1,2,3,4,5,6"

//栈方法
var a = new Array(1,2,3);
a.push(4);
console.log(a);//[1, 2, 3, 4]
console.log(a.length);//4
console.log(a.pop());//4
console.log(a); //[1, 2, 3]
console.log(a.length);//3

//队列方法
var a=new Array(1,2,3);
a.unshift(4);
console.log(a);//[4, 1, 2, 3]
console.log(a.length);//4
console.log(a.shift());//4
console.log(a); //[1, 2, 3]
console.log(a.length);//3

//splice方法
var a = new Array(1,2,3,4,5);
console.log(a.splice(1,3));//[2, 3, 4]
console.log(a);//[1,5]

//join
var a = new Array(1,2,3,4,5);
console.log(a.join(',')); //1,2,3,4,5
console.log(a.join(' ')); //1 2 3 4 5

//concat(array) 拼接数组
var a = new Array(1,2,3,4,5);
var b = new Array(6,7,8,9);
console.log(a.concat(b));//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a); //[1, 2, 3, 4, 5]
console.log(b); //[6, 7, 8, 9]

//reverse  数组逆序
var a = new Array(1,2,3,4,5);
a.reverse();
console.log(a); //[5, 4, 3, 2, 1]

/*
	sort方法不是按照大小排序，而是按照对应字符串的字典顺序排序。
	如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数，表示按照自定义方法进行排序。该函数本身又接受两个参数，表示进行比较的两个元素。如果返回值大于0，表示第一个元素排在第二个元素后面；其他情况下，都是第一个元素排在第二个元素前面。
*/
var a = [-3,1,3,18,22,9]
arr.sort(function(a,b){
	return a-b;
})
    console.log(arr);


```
### map()

- map方法对数组的所有成员依次调用一个函数，根据函数结果返回一个 新数组 。
```js
var numbers = [1, 2, 3];
numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]
numbers
// [1, 2, 3]
```

- map方法接受一个函数作为参数。该函数调用时，map方法会将其传入三个参数，分别是当前成员、当前位置和数组本身。
```js
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
```

- map方法不仅可以用于数组，还可以用于字符串，用来遍历字符串的每个字符。但是，不能直接使用，而要通过函数的call方法间接使用，或者先将字符串转为数组，然后使用。
```js
var upper = function (x) {
  return x.toUpperCase();
};

[].map.call('abc', upper)
// [ 'A', 'B', 'C' ]

// 或者
'abc'.split('').map(upper)
// [ 'A', 'B', 'C' ]
```

### filter()

- filter方法的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。

```js
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```

- filter方法的参数函数可以接受三个参数，第一个参数是当前数组成员的值，这是必需的，后两个参数是可选的，分别是当前数组成员的位置和整个数组。
```js
[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
});
// [1, 3, 5]
```

### some()，every()

> 这两个方法类似“断言”（assert），用来判断数组成员是否符合某种条件

- `some`方法是只要有一个数组成员的返回值是`true`，则整个`some`方法的返回值就是`true`，否则`false`。
- `every`方法则是所有数组成员的返回值都是`true`，才返回`true`，否则`false`

```js
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true

var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false

```
### indexOf()，lastIndexOf()

- `indexOf`方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。
- `indexOf`方法还可以接受第二个参数，表示搜索的开始位置
- `lastIndexOf`方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

注意，如果数组中包含NaN，这两个方法不适用，即无法确定数组成员是否包含NaN。
这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值。
## Date

> Date对象是JavaScript提供的日期和时间的操作接口

```js
//now方法返回当前距离1970年1月1日00:00:00的毫秒数
Date.now(); 

//Date.parse()
Date.parse("January 26, 2011 13:51:50")
Date.parse("Mon, 25 Dec 1995 13:30:00 GMT")
Date.parse("Mon, 25 Dec 1995 13:30:00 +0430")
Date.parse("2011-10-10")
Date.parse("2011-10-10T14:48:00")

```

### get

- Date.prototype.getTime()：返回实例对象距离1970年1月1日00:00:00对应的毫秒数，等同于valueOf方法
- Date.prototype.getDate()：返回实例对象对应每个月的几号（从1开始）
- Date.prototype.getDay()：返回星期，星期日为0，星期一为1，以此类推
- Date.prototype.getFullYear()：返回四位的年份
- Date.prototype.getMonth()：返回月份（0表示1月，11表示12月）
- Date.prototype.getHours()：返回小时（0-23）
- Date.prototype.getMilliseconds()：返回毫秒（0-999）
- Date.prototype.getMinutes()：返回分钟（0-59） 
- Date.prototype.getSeconds()：返回秒（0-59）
- Date.prototype.getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示，返回结果考虑到了夏令时因素

### set

- Date.prototype.setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳

- Date.prototype.setFullYear(year [, month, date])：设置四位年份

- Date.prototype.setHours(hour [, min, sec, ms])：设置小时（0-23）

- Date.prototype.setMilliseconds()：设置毫秒（0-999）

- Date.prototype.setMinutes(min [, sec, ms])：设置分钟（0-59）

- Date.prototype.setMonth(month [, date])：设置月份（0-11）

- Date.prototype.setSeconds(sec [, ms])：设置秒（0-59）

- Date.prototype.setTime(milliseconds)：设置毫秒时间戳

### Date.prototype.toString()

```js
var today = new Date();
today.toString(); 
```
### 判断某一年是不是闰年
```js
	function leap(year){
		var d = new Date(year,1,29)
		if (d.getDate() === 29) {
			console.log('是闰年')
		} else {
			console.log('不是')
		}
	}
```
### 获取当前时间到指定日期的间隔时间
```js
	function getChIntv(dateStr) {
		var targetDate = new Date(dateStr);
		var curDate = new Date();
		var offset = Math.abs(targetDate - curDate);
		var totalSeconds = Math.floor(offset/1000)

		var second = totalSeconds%60;
		var totalMinutes = Math.floor((offset/1000)/60);
		var minutes = totalMinutes%60
		var totalHours = Math.floor(totalMinutes/60)
		var hours = totalHours%24
		var totalDays = Math.floor(totalHours/24)

		return totalDays + ' days ' + hours + ' hours ' + minutes + ' minutes ' + second + ' second '
	}
```


## ES5数组扩展

### 判断一个对象是不是数组：
```js
var a = new Array(123);
var b = new Date();
console.log(Array.isArray(a)); //true
console.log(Array.isArray(b)); //false
```

### 用于查找数组内指定元素位置，查找到第一个后返回其索引，没有查找到返回-1，indexOf从头至尾搜索，lastIndexOf反向搜索。：
```js
var a = new Array(1,2,3,3,2,1);
console.log(a.indexOf(2)); //1
console.log(a.lastIndexOf(2)); //4
```

### .forEach(element, index, array)

遍历数组，参数为一个回调函数，回调函数有三个参数：
- 当前元素
- 当前元素索引值
- 整个数组
```js
var a = new Array(1,2,3,4,5,6);

a.forEach(function(e,i,array){
    array[i]= e + 1;
});

console.log(a); //[2, 3, 4, 5, 6, 7]
```

### .every(function(element, index, array)) / .some(function(element, index, array))

这两个函数类似于离散数学中的逻辑判定，回调函数返回一个布尔值

1. every是所有函数的每个回调函数都返回true的时候才会返回true，当遇到false的时候终止执行，返回false

2. some函数是“存在”有一个回调函数返回true的时候终止执行并返回true，否则返回false

在空数组上调用every返回true，some返回false

### .map(function(element))

与forEach类似，遍历数组，回调函数返回值组成一个新数组返回，新数组索引结构和原数组一致，原数组不变

```js
	var arr = [3,4,5]

	var newArr = arr.map(function(value){
		return value * value;
	})
	console.log(newArr) 
```

### .filter(function(element))

返回数组的一个子集，回调函数用于逻辑判断是否返回，返回true则把当前元素加入到返回数组中，false则不加

新数组只包含返回true的值，索引缺失的不包括，原数组保持不变
```js
var a = new Array(1,2,3,4,5,6);

var newArr = a.filter(function(e){
  return e % 2 == 0;
});

console.log(newArr); 
```

### .reduce(function(v1, v2), value) / .reduceRight(function(v1, v2), value)


遍历数组，调用回调函数，将数组元素组合成一个值，reduce从索引最小值开始，reduceRight反向，方法有两个参数

- 回调函数：把两个值合为一个，返回结果

- value，一个初始值,可选

```js
var a = new Array(1,2,3,4,5,6);

console.log(a.reduce(function(v1, v2){
    console.log(v1,v2);
    return v1 + v2;
})); 

console.log(a.reduceRight(function(v1, v2){
    return v1 - v2;
}, 100));
```