function CustomSort(codes, order) {
  let orderMap = new Map();
  for (let [index, char] of order.split("").entries()) {
    if (!orderMap.has(char)) {
      orderMap.set(char, index);
    }
  }

  codes.sort((a, b) => {
    let len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      if (a[i] !== b[i]) return orderMap.get(a[i]) - orderMap.get(b[i]);
    }
    return a.length - b.length;
  });
}
const order = 'abcdefghijklmnopqrstuvwxyz';
const productCodes = ['adc', 'abc', 'ad', 'z'];
CustomSort(productCodes, order)
console.log(productCodes);
