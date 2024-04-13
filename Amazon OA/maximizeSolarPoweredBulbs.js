/*

Solar power consumption has increased due to concern over global warming. Some Amazon offices have decided to replace some of their electricity-powered bulbs with solar-powered bulbs. Here electricity-powered means using a wired supply of electricity and solar-powered means powered by an independent solar panel.
In one such office, the lights are arranged sequentially represented by a binary sequence, bulbs. The electricity-powered bulbs are represented by '0', and the solar powered bulbs are '1'.

It is desired to have as many solar-powered bulbs as possible, but the electricity-powered ones are brighter than the solar powered bulbs. An electricity-powered bulb can be replaced by a solar-powered bulb

only if the new solar-powered bulb is not adjacent to a solar-powered bulb. More formally, a 0 can be replaced by a 1 if and only if it does not become adjacent to some other 1 on replacement.

Find the maximum number of solar powered bulbs that can be placed in the office. Not that the initial lighting may already have some adjacent solar powered bulbs. The constraint is only for new bulbs.
Note: Report the total number of solar powered bulbs and not just the number of replaced bulbs.

Example
bulbs "1111110001".
1
1
1
1
1
1
1
1
1
1
0
1
1
Replacing bulb 8 with solar powered bulb
Initially, there are 7 solar powered bulbs. Only the 8th bulb can be replaced with solar. Either of the other two positions is next to a solar powered bulb which violates the rule. With the replacement of 1 bulb, the maximum of 8 solar powered bulbs is achieved. Return-3.


int maximizeSolarPoweredBulbs(string bulbs) {
    int onesCount = 0;

    for (char c : bulbs) {
        if (c == '1') {
            onesCount++;
        }
    }

    int count = 0;

    for (int i = 0; i < bulbs.size(); ++i) {
    if (bulbs[i] == '0') {
            if ((i == 0 || bulbs[i - 1] == '0') && (i == bulbs.size() - 1 || bulbs[i + 1] == '0')) {
                bulbs[i] = '1';
                count++;
            }
        }
    }

    return onesCount + count;
}

*/

function maximizeSolarPoweredBulbs(bulbs) {
  let res = 0;
  bulbs = bulbs.split('');
  for (let i = 0; i < bulbs.length; i++) {
    let left = i === '0' ? '0' : bulbs[i - 1];
    let right = i === bulbs.length - 1 ? 0 : bulbs[i + 1];
    if (bulbs[i] === '1') {
      res++;
      continue;
    } else if (left === '0' && right === '0') {
      bulbs[i] = '1';
      res++;
    }
  }
  return res;
}

console.log(maximizeSolarPoweredBulbs('1111110001'));
