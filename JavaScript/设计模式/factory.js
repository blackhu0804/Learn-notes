function createPerson(name) {
  var person = {
    name: name,
    sayName: function(){
      console.log(this.name);
    }
  };
  return person;
}
createPerson('guyue').sayName(); //guyue
var t = createPerson('guyue').sayName;  //此时this指向window
t.apply({name:'aaa'})