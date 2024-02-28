Array.prototype.myReducer = function (callBackFn, initialValue){
  const noInitalValue = initialValue === undefined;
  const len = this.length;

  if(noInitalValue && len===0){
    throw new TypeError("Reducing empty array with no intial value")
  }

  let acc = noInitalValue ? this[0] : initialValue;
  let startingIndex = noInitalValue ? 1 : 0;
  for(let k = startingIndex; k < len; k++){
    if(Object.hasOwn(this,k)){
      acc = callBackFn(acc, this[k], k, this)
    }
  }
  return acc
}

let array = [1];
let result = array.myReducer((acc,element,index,arr) => acc*2)
console.log(result);
