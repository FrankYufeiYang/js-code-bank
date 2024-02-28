function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(null, args);
    } else {
      return function (...args2) {
        return curried.apply(null, args.concat(args2));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
function mul(a, b, c, d, e) {
  return 1;
}
function Animal(name) {
  this.name = name;
}
let curriedSum = curry(sum);
mul(1)

// curriedSum(1, 2, 3); // 6, still callable normally
// alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3));; // 6, full currying

