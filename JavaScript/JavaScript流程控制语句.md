# JavaScript流程控制语句

## if

```js

if(condition){
    //true statement
}else {
    //false statement
}

```

## label

```js
labelname: statement;
```

## switch

```js
switch(expresstion){
    case value1:
        statement;
        break;

    case value2:
        statement;
        break;

    case value3:
        statement;
        break;

    default:
        statement;
}
```

```js

var num = parseInt( prompt() );

switch (num) {
    case 100:
        console.log("very good");
        break;
    case 90:
        console.log("not bad");
        break;
    default:
        console.log("just so so");
}
```

JavaScript switch语句虽然参考的C语言的写法，但是有特殊性:

- switch和case可以使用任意表达式，不一定是常量
- switch语句进行比较的时候是全等于（===）操作，不会发生类型转换

## while和do-while

### while

while语句属于前测试循环语句，也就是在循环体内的代码被执行之前，就会对条件求值，不符合的话就不会执行

```js
var i = 10;
while(i > 0){
    console.log(i);
    i--;
}
```

### do-while

do-while是后测试循环语句，在出口条件判断之前就会执行一次代码

```js
var i = 4;
do{
    console.log(i);
    i--;
}while(i > 5);
```

## for 

for语句也是前测试循环语句，但具备在执行循环代码以前初始化变量和定义循环后要执行代码的能力，改造一下while语句

```js
for(var i = 0;i < 10; i++){
    console.log(i);
}
```

## for-in

for-in是一种迭代语句，用于枚举对象的属性

```js
for(property in object){
    statement
}
```

例子：

```js
var obj = {
    name: 'suyu',
    age: '20'
}

for(var key in obj){
    console.log(obj[key]);
}

//遍历数组
var arr = [100,90,80,70];

for(var i in arr){
    console.log(arr[i])
}
```

 > 因为ECMAScript规定对象中的属性没有顺序，所以for-in遍历出来的属性的顺序也不是固定的（虽然大部分浏览器是按属性名称排序，我们不能依赖这个）

## break和continue

- break 用于强制退出循环体，执行循环后面的语句
- continue 用于退出本次循环，执行下次循环

```js
for(var i = 1; i< 10; i++){
    if(i % 4 === 0){
        break;
    }

    console.log(i);
}

for(var i = 1; i< 10; i++){
    if(i % 4 === 0){
        continue;
    }

    console.log(i);
}
```

