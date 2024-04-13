function numOfResultingString(s, k) {
  let res = 0;
  for (let i = 0; i <= s.length - k; i++) {
    let left = i;
    let right = i + k - 1;
    while (left <= right) {
      if (s[i].charCodeAt() > s[i + k - 1].charCodeAt()) {
        res++;
        break;
      }
      left++;
      right--;
    }
  }
  return res
}

let s = 'amazon';
let k = 3;
console.log(numOfResultingString(s, k));
