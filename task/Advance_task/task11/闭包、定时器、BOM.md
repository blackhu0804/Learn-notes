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