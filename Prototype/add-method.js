// Function.prototype.defer = function (ms, ...args) {
//   // 'this' is the function f here
//   setTimeout(()=>this.apply(null,args), ms);
// };

// function f(...args) {
//   console.log('Hello!',...args);
// }

// f.defer(1000,1,2,3,4,5,6,7); // shows "Hello!" after 1 sec

// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (...args) {
//     setTimeout(() => {
//       f.apply(this, args);
//     }, ms);
//   };
// };

// // check it
// function f(a, b) {
//   console.log(this);
//   console.log(a + b);
// }

// f.defer(1000)(1, 2); // shows 3 after 1 sec


Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    console.log(this);
    setTimeout(() => f.apply(this, args), ms);
  };
};

let user = {
  name: 'John',
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi.defer(1000)();
