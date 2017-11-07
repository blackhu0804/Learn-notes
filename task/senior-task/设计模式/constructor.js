function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  return this.name;
}
var student = new Person('古月', '20');
console.log(student.sayName());