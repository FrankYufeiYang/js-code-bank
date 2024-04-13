/*
You are given a binary string. Find the minimum number of operations required to reverse it. An operation is defined as :
Remove a character from any index and append it to the end of the string.

Eg :
S = "00110101" -> 10101100
00110101 - 00101011 (index 3 was appended at the end)
00101011 - 01010110 (index 0 was appended at the end)
01010110 - 10101100 (index 0 was appended at the end)
so the answer here is 3 operations

constraints : 1<S.length<=1e5

*/
function reverseBinaryString(s) {
  let n = s.length;
  s = s.split('');
  let rev = [...s].reverse();
  let longestPrefixLength = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === rev[longestPrefixLength]) {
      longestPrefixLength++;
    }
  }
  return n - longestPrefixLength;
}

console.log(reverseBinaryString('00110101'));
