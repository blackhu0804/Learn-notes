var EventCenter = (function(){
  var event = {}; //存储所有的key/value
  //('hello',function(){})
  function on(evt, hander){
    // event['hello'] = [{
    //   hander: function
    // }];
    event[evt] = event[evt] || [];
    event[evt].push({
      hander: hander
    });
  }
  //('hello')
  function fire(evt, args){
    if(!event[evt]){//不执行
      return;
    }
    for(var i = 0; i < event[evt].length;i++){
      event[evt][i].hander(args);
    }
  }
  function off(name){
    delete event[name];
  }
  return {
    on: on,
    fire: fire,
    off: off //取消订阅
  }
})();

EventCenter.on('hello',function(){
  console.log('hello');
})
EventCenter.fire('hello'); //hello
EventCenter.off('hello');
EventCenter.fire('hello');  //undefined