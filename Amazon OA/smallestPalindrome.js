/*
Given a String, return the lexicographically smallest palindrome possible or -1.

Sample Input 1 - "a?rt???" - Output - aartraa, Explanation - Question marks can be replaced by a, r, a, a and we can make it palindome.
Sample output 2 - "bx??tm" - Output is -1. Explanation - no character can be added to make it a palindrome.
Sample output 2 - "ai?a??u" - Output - "aaiuiaa". Explanation - ? is replaced by a, a and i and characters are rearranged to make it a palindrome.


goal: return the lexicographically smallest palindrome possible, means you can swap ? with any char or rearrange the string
input: a string, it can be empty, it can be very long, it can have duplicates, it also has speical character '?'
output: if string is empty, return empty string,  otherwise return the goal string

Big O: O(n) will be ideal
*/

function smallestPalindrome(s) {
  let n = s.length;
  if (n === 0) return '';
  s = s.split('');

  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  let numOfWildCard = map.get('?');
  map.delete('?');
  let chars = [...map.keys()].sort();
  if (n % 2 === 0) {
    for (let c of chars) {
      if (map.get(c) % 2 === 1) {
        if (numOfWildCard <= 0) return -1;
        numOfWildCard--;
        map.set(c, map.get(c) + 1);
      }
    }
  } else {
    let numOfOdd = 0;
    for (let i = chars.length - 1; i >= 0; i--) {
      if (map.get(chars[i]) % 2 === 1) {
        numOfOdd++;
        if (numOfOdd > 1) {
          if (numOfWildCard <= 0) return -1;
          numOfWildCard--;
          map.set(chars[i], map.get(chars[i]) + 1);
        }
      }
    }
  }
  if (numOfWildCard % 2 === 1) {
    return -1;
  } else if (numOfWildCard > 0) {
    map.set('a', (map.get('a') || 0) + numOfWildCard);
  }
  let left = 0,
    right = n - 1;
  for (let c of chars) {
    let num = map.get(c);
    while (num >= 2) {
      s[left++] = c;
      s[right--] = c;
      num -= 2;
    }
    if (num === 1) {
      s[Math.floor(n / 2)] = c;
    }
  }
  return s.join('');
}

let s = 'ai?a??u';
console.log(smallestPalindrome(s));
