Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (
    typeof callbackFn !== 'function' ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const len = this.length;
  const A = [];
  let k = 0;
  let to = 0;

  while (k < len) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    const kPresent = Object.hasOwn(this, k);
    if (kPresent) {
      const kValue = this[k];
      const selected = Boolean(callbackFn.call(thisArg, kValue, k, this));
      if (selected === true) {
        A[to] = kValue;
        to += 1;
      }
    }
    k += 1;
  }

  return A;
};

const isThisProductEven = function (element) {
  return (element * this) % 2 === 0;
};
const isThisProductEvenArrowFn = (element) =>
  (element * this) % 2 === 0;
console.log([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 10));

  // test('uses this argument', () => {
  //   expect([1, 2, 3, 4].myFilter(isThisProductEven)).toStrictEqual([]);
  //   expect([1, 2, 3, 4].myFilter(isThisProductEven, 10)).toStrictEqual([
  //     1, 2, 3, 4,
  //   ]);
  //   expect([1, 2, 3, 4].myFilter(isThisProductEven, 9)).toStrictEqual([2, 4]);
  //   expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn)).toStrictEqual([]);
  //   expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 10)).toStrictEqual(
  //     [],
  //   );
  //   expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 9)).toStrictEqual(
  //     [],
  //   );
  // });
