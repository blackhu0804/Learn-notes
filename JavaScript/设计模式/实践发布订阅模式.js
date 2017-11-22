var Event = (function(){
  var event = {};
  function on(evt, hander){
    event[evt] = event[evt] || [];
    event[evt].push({
      hander: hander
    });
  }
  function fire(evt, args){
    if(!event[evt]){
      return;
    }
    for(var i = 0;i < event[evt].length;i++){
      event[evt][i].hander(args);
    }
  }
  function off(name){
    delete event[name];
  }
  return {
    on: on,
    fire: fire,
    off: off
  }
})()


Event.on('change', function(val){
  console.log('change...  now val is ' + val);  
});
Event.fire('change', '饥人谷');
Event.off('changer');