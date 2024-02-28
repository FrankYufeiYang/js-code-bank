function flattenOnlyNumbers(array) {
  return array
    .toString()
    .split(',')
    .map((numStr) => Number(numStr));
}


console.log([[[[[1], 2], 3], 4], 5].toString());
console.log([[[[[1], 2], 3], 4], 5].toString().split(','));