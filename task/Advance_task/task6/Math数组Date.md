# Math

## 1、写一个函数，返回从min到max之间的 随机整数，包括min不包括max 
```js
function random(min,max) {
	return Math.floor(Math.random() * (max - min) + min)
}
```

## 2、写一个函数，返回从min都max之间的 随机整数，包括min包括max 
```js
function random(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
```

## 3、写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
```js
	function getRandStr(len) {
		// body...
		var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
		var str = ''
		for(var i = 0;i < len;i++) {
			str += dict[Math.floor(Math.random()*62)]
		}
		return str;
	}
    getRandStr(10)
```

## 4.写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

```js
	function getRandIP(){
  		var str = ''
  		for(var i = 0;i < 3;i++){
  			str += Math.floor(Math.random()*256) + '.'
  		}
  		str += Math.floor(Math.random()*256)
  		return str
	}
	var ip = getRandIP()
	console.log(ip)
```

## 5、写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff

```js
	function getRandColor(){
		var dict = '1234567890abcdef'
		var str = '#'
		for(var i = 0;i < 6;i++) {
			str += dict[Math.floor(Math.random()*16)]
		}
		return str
	}
	var color = getRandColor()
	console.log(color)
```


# 数组

## 1.数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法

```js
	var arr = [3,4,5]
	//1.栈方法
	arr.push(6);
	console.log(arr);  //[3,4,5,6]	将一个元素或多个元素添加到数组的末尾，并返回数组的新长度

	arr.pop();
	console.log(arr); //[3,4,5]		删除数组的最后一个元素

	//2.队列方法
	var arr = [3,4,5]

	arr.unshift(6);		//向数组头部添加元素
	console.log(arr);	//[6,3,4,5]

	arr.shift();	//删除数组头部元素
	console.log(arr)	//[3,4,5]

        //join
	var arr = [1,2,3,4,5]
	console.log(arr.join('-')) //1-2-3-4-5,将数组拼接成字符串

        //splice，一次性实现数组插入删除
        //1.splice实现push
	var arr = [3,4,5]
	arr.splice(3,0,6)
	console.log(arr)

	//2.splice实现pop效果
	var arr = [3,4,5,6];
	arr.splice(3,1);
	console.log(arr);

	//3.splice实现unshift效果
	var arr = [3,4,5,6]
	arr.splice(0,0,2);
	console.log(arr)

	//4.splice实现shift效果
	var arr = [3,4,5,6]
	arr.splice(0,1);
	console.log(arr)
```

## 2、写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作
```js
	function squareArr(arr){
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i] * arr[i];
		}
		return arr;
	}
	var arr = [2, 4, 6]
	squareArr(arr)
	console.log(arr) // [4, 16, 36]
```

## 3、写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变
```js
	function filterPositive(arr){
		return arr.filter(function(value){
			if(typeof value == 'number' && value > 0)
				return value;
		})
	}
	var arr = [3, -1,  2,  '饥人谷', true]
	var newArr = filterPositive(arr)
	console.log(newArr) //[3, 2]
	console.log(arr) //[3, -1,  2,  '饥人谷', true]
```

## Date

1. 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间
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

		return totalDays + ' 天 ' + hours + ' 小时 ' + minutes + ' 分 ' + second + ' 秒 '
	}
	var str = getChIntv('2018-01-01');
	console.log(str);
```

2. 把hh-mm-dd格式数字日期改成中文日期

```js
	function getChasDate(str) {
		var arr = str.split('-');
		var dict = ["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十","三十一"];
		var year = '';
		var month = '';
		var day = '';
		for(var i = 0;i < 4;i++){
			year += dict[arr[0][i]];
		}
		month = dict[parseInt(arr[1])];
		day = dict[parseInt(arr[2])];
		return year + '年' + month + '月' + day + '日';
		console.log(arr);
	}
	var str = getChasDate('2015-01-08');
	console.log(str);  // 二零一五年一月八日
```

3. 写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:
- 刚刚（ t 距当前时间不到1分钟时间间隔）
- 3分钟前 (t距当前时间大于等于1分钟，小于1小时)
- 8小时前 (t 距离当前时间大于等于1小时，小于24小时)
- 3天前 (t 距离当前时间大于等于24小时，小于30天)
- 2个月前 (t 距离当前时间大于等于30天小于12个月)
- 8年前 (t 距离当前时间大于等于12个月)

```js
	function friendlyDate(time){
        var offset = Math.abs(time - (new Date())),
        str;
        if(offset < 60*1000){
            str = '刚刚';
        }else if(offset >= 60*1000 && offset < 60*60*1000){
            str = '3分钟前';
        }else if(offset >= 60*60*1000 && offset < 24*60*60*1000){
            str = '8小时前';
        }else if(offset >= 24*60*60*1000 && offset < 30*24*60*60*1000){
            str = '3天前';
        }else if(offset >= 30*24*60*60*1000 && offset < 12*30*24*60*60*1000){
            str = '2个月前';
        }else if(offset >= 12*30*24*60*60*1000){
            str = '8年前';
        }
        return str;
    }
    var str = friendlyDate( '1484286699422' ); 
    console.log(str)
    var str2 = friendlyDate('1483941245793'); 
    console.log(str2)
```