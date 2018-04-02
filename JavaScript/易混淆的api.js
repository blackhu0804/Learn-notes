/* 
    * call
    * apply
    * bind
*/

var a = {
    name: 'black',
    sayName: function (firstname, lastname) {
        console.log(`${firstname} ${this.name} ${lastname}`)
    }
}
var b = a.sayName
b() // undefined
// 产生 undefined 的原因是：在调用 b 的时候，sayName 中的 this 指向不再指向对象 a ， 而是指向了全局对象 window


//   使用 call
var b = a.sayName;
b.call(a, 'gu', 'yue') // gu black yue


//   使用 apply
var b = a.sayName
b.apply(a, ['gu', 'yue']) // gu black yue

/* 
    call 和 apply 的区别在于后续参数，
    call 依次传入后续参数，将被函数所使用。
    apply 需要将后续参数以数组的形式传入。
*/

// 使用 bind， bind 同样可以用来修改 this 的指向，但是 bind 绑定之后并不会立即执行函数
var b = a.sayName
var c = b.bind(a, 'gu', 'yue')
c() // // gu black yue

/* 
    * splice 拼接，===> 将一个数组分割开，并且可以再以指定的方式重新拼接在一起。
    * slice 片，切片 ===> 在一个数组或是字符串中切取我们想要的一段。
    * split 分裂，断开 ===> 将一个字符串分裂成一个数组。
*/

// 1. splice(starts, count, item1, ..., itemx)方法接受多个参数,第一个参数为删除的起始元素，第二个参数为删除数量，后续为插入的内容。
// 修改原始数组，返回被删除的内容数组
var a = [1, 2, 3, 4, 5]
a.splice(1, 2, 4, 4)
console.log(a) // [1, 4, 4, 4, 5]

// 2. slice(stats, beforeEnds) 方法最多接受两个参数，第一个参数 ，第一个参数为起始位置，第二个参数为终止位置，第二个参数省略默认截取到数据末尾。
// slice 不会修改原数组，返回的是切割的片段
var b = [1, 2, 3, 4, 5]
console.log(b.slice(1, 3)) // [ 2, 3 ]
console.log(b.slice(3))    // [ 4, 5 ]
console.log(b.slice(2, -1)) // [ 3, 4 ]
console.log(b)

// 3. split(separator, count)方法可接受两个参数，第一个参数为分割符，用于指定字符串的分割规则，第二个参数为返回数组的最大长度，返回的输出长度不会大于这个参数。
var str = '123456'
console.log(str.split(''))  // [ '1', '2', '3', '4', '5', '6' ]
console.log(str.split('', 3))  // [ '1', '2', '3' ]
console.log(str) // '123456'

/* 
    * map 
    * forEach 
    * reduce 
    * filter 
    * every 
    * some
*/

// 1. map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
var c = [1, 2, 3, 4]
var d = c.map( x => {
    return x * 2
})
console.log(d)  // [ 2, 4, 6, 8 ]

// 2. forEach()
var arr = ['a', 'b', 'c', 'd']
arr.forEach((item, index) => {
    console.log(index, item ) 
})
/* 
    0 'a'
    1 'b'
    2 'c'
    3 'd'
*/

// 3. reduce()
var arr1 = [1, 2, 3, 4]
var res = arr1.reduce( (cur, next) => {
    return cur + next
})
console.log(res) // 10

// 4.filter 
function isBig(value) {
    return value > 10
}
var arr2 = [1, 3, 7, 12, 15].filter(isBig)
console.log(arr2) // [ 12, 15 ]

// 5. every 方法测试数组的所有元素是否都通过了指定函数的测试。
var passed = [1, 3, 7, 12, 15].every(isBig)
var passed2 = [15, 11, 22].every(isBig)
console.log(passed) // false
console.log(passed2) // true


// 6. some  方法测试数组中的某些元素是否通过由提供的函数实现的测试。
var passed3 = [1, 3, 7, 12, 15].some(isBig)
var passed4 = [1, 2, 3].some(isBig)
console.log(passed3) // true
console.log(passed4) // false