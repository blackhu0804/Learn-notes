//单例模式，节约内存
//匿名函数
var People = (function(){
  var instance;
  function init(name) {
    return {
      name: name
    }
  }//词法作用域 function可访问的上下文由它所定义的位置所体现
  return {
    createPoople: function(name) {
      if(!instance) {//只会执行一次
        instance = init(name);
      }
      return instance;
    }
  }
})();

People.createPoople('guyue'); //{name: 'guyue'}
People.createPoople('hello'); //{name: 'guyue'}

//闭包
//js里的作用域通过函数来体现的，所以立即执行函数里面的变量不能被外面所看见
