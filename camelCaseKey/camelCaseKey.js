/**
 * @param Object
 * @return Object
 */
function camelCaseKeys(object) {
  if (Array.isArray(object)) {
    return object.map((item) => camelCaseKeys(item));
  }
  if (typeof object !== 'object' || object === null) return object;
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      camelCase(key),
      camelCaseKeys(value),
    ])
  );
}

function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}

console.log(camelCaseKeys({ foo_bar: true, bar_baz: { baz_quz: '1' } }));
