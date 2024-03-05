/**
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>}
 */
function getElementsByTagName(el, tagName) {
  const elements = [];
  const tag = tagName.toUpperCase();
  for (let child of el.children) {
    traverse(child);
  }
  return elements;
  function traverse(ele) {
    if (!ele) return;
    if (ele.tagName === tag) {
      elements.push(ele);
    }
    for (let child of ele.children) {
      traverse(child);
    }
  }
}
