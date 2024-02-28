function curry2(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    } else {
      curried.bind(this, ...args);
    
  };
}
const empty = () => 0;
const square = (a) => a * a;
const add = (a, b) => a * b;

 const curried = curry2(square);
console.log( curried(2));
console.log(curried());