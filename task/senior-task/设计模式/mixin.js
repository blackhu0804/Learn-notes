//混合模式
var Person = function(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype.sayName = function() {
  console.log(this.name);
}

var Student = function(name, age, score){
  Person.call(this, name, age);
  this.score = score;
}

Student.prototype = create(Person.prototype);

function create(parentObj) {
  function F(){}
  F.prototype = parentObj;
  return new F();
}

Student.prototype.sayScore = function() {
  console.log(this.score);
}; 

var student = new Student('古月', 20, 100);
student.sayName();
student.sayScore();