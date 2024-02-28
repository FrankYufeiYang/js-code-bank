// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.makeSound = function () {
//   console.log('The ' + this.constructor.name + ' makes a sound.');
// };
// function Dog(name) {
//   Animal.call(this, name); // Call the parent constructor.
// }

// var obj1 = {
//   value: 'hi',
//   print: function () {
//     console.log(this);
//   },
// };
// new obj1.print(); // -> {}

function personFn(name, age) {
  this = {};
  // this.constructor = PersonConstructor;
  // this.__proto__ = PersonConstructor.prototype;
  // Set up logic such that: if
  // there is a return statement
  // in the function body that
  // returns anything EXCEPT an
  // object, array, or function:
  //     return this (the newly
  //     constructed object)
  //     instead of that item at
  //     the return statement;
  var personObj = {};
  personObj.name = name;
  personObj.age = age;
  console.log(this);
  // return personObj;

  // return this;
}
let p1 = new personFn('ALEX', 30);
console.log(p1);
console.log(p1.constructor);
console.log(p1.__proto__);