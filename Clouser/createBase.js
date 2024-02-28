function createBase(base){
  return function (num){
    if(!base)
      throw TypeError("num parameter need to be a valid number")
    return num ? createBase(num+base) :  base
  }
}

const baseFn = createBase(1);
console.log(baseFn(3)(2)());