function findBiggestNumberSmallerThanN(array, n) {
  // Sort the array in descending order
  array.sort((a, b) => b - a);

  let nStr = n.toString();
  let result = '';
  let usedSmaller = false;

  for (let i = 0; i < nStr.length; i++) {
    let found = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] <= nStr[i]) {
        if (array[j] < nStr[i]) usedSmaller = true;
        result += array[j];
        found = true;
        break;
      }
    }
    if (!found || usedSmaller) break;
  }

  if (!usedSmaller) {
    // If no smaller digit is found, reduce the result size and fill it
    result = result.substring(0, result.length - 1);
    while (result.length < nStr.length - 1) {
      result += array[0];
    }
  } else {
    while (result.length < nStr.length) {
      result += array[0];
    }
  }

  return parseInt(result);
}
alert(typeof button); // object: the script can 'see' the button below
// as modules are deferred, the script runs after the whole page is loaded
// Example usage
const array = [3, 4];
const n = 3333;
console.log(findBiggestNumberSmallerThanN(array, n));
