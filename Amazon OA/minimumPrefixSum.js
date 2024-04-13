/*
There are n products being sold on a shopping app. The price of the ith product is price[i]. The developers decided to give special gift cards to innovative customers. A gift card will be given if any customer buys a contiguous subsegment of products and at least 2 of the products have a matching price.
Find the minimum amount of money a customer needs to spend in order to get the gift card. If it is not possible for any customer to get a gift card, return -1.

Example:
price = [1, 2, 3, 1, 2, 1]

In the above example, the number of products n = 6. The subsegments where not all prices are distinct are (in increasing order of starting positions):

For all the other subsegments, all prices are distinct. The subsegment with the minimum price is from index 3 to 5 which costs 1 + 2 + 1 = 4. Return 4.


*/

function minimumPrefixSum(price) {
  let res = Infinity;
  let prefixSum = new Array(price.length);
  let map = new Map();
  prefixSum[0] = price[0];

  map.set(price[0], 0);
  for (let i = 1; i < price.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + price[i];
    if (map.has(price[i])) {
      let index = map.get(price[i]);
      res = Math.min(res, prefixSum[i] - prefixSum[index] + price[index]);
    }
    map.set(price[i], i);
  }
  return res;
}

console.log(minimumPrefixSum([1, 2, 3, 1, 2, 1]));
