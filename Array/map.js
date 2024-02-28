Array.prototype.myMap = function (callbackFn, thisArg){
  const len = this.length;
  const array = new Array(len);
  for(let k = 0; k < len; k++){
    if(Object.hasOwn(this,k)){
      array[k] =callbackFn.apply(thisArg, [this[k],k,this]);
    }
  }
  return array
}