var assert = require('assert');
function totalWaitTime(arr) {
  arr = [...arr];
  let n = arr.length;
  const order = Array.from({ length: n }, (_, i) => i) // Creates an array of indices [0, 1, ..., n-1]
    .sort((a, b) => {
      // Compare the elements by value first
      if (arr[a] !== arr[b]) {
        return arr[a] - arr[b];
      }
      // If the values are equal, then sort by index
      return a - b;
    });
  const ans = new Array(n).fill(0);
  let t = 0;
  let prev = null;
  for (let i of order) {
    let v = arr[i];
  }
}

function naiveSolution(arr) {
  arr = [...arr];
  let t = 0;
  let left = arr.length;
  let n = left;
  let ans = new Array(n).fill(0);
  while (left != 0) {
    for (let i = 0; i < n; i++) {
      if (arr[i] > 1) {
        t++;
        arr[i]--;
      } else if (arr[i] === 1) {
        t++;
        arr[i] = 0;
        ans[i] = t;
        left--;
      }
    }
  }
  let sum = ans.reduce((prev, curr) => prev + curr, 0);
  return sum;
}
// Example usage:

let arr_size = 50,
  max_val = 100,
  test_n = 2000,
  verbose = 0;

console.log(totalWaitTime([3, 1, 2]), naiveSolution([3, 1, 2]));

for (let i = 0; i < test_n; i++) {
  let arr = new Array(arr_size).fill(
    Math.floor(Math.random() * (max_val - 1 + 1) + 1)
  );
  assert(totalWaitTime(arr) === naiveSolution(arr));
}
console.log('ALL PASS');
// for _ in range(test_n):
//     arr = [random.randint(1, max_val) for i in range(arr_size)]
//     if verbose: print(arr)
//     assert(total_time(arr) == total_time_naive(arr))
