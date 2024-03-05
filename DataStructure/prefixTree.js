class TrieNode {
  constructor() {
    this.R = 26;
    this.links = new Array(this.R);
    this.val = null;
  }
  containsKey(char) {
    return this.links[this.transformCharCode(char)] ? true : false;
  }
  get(char) {
    return this.links[this.transformCharCode(char)];
  }
  put(char, node) {
    this.links[this.transformCharCode(char)] = node;
  }
  setValue(val) {
    this.val = val;
  }
  transformCharCode(char) {
    return char.charCodeAt() - 'a'.charCodeAt();
  }
}

class TrieMap {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  getNode(node, key) {
    let p = node;
    for (let i = 0; i < key.length; i++) {
      if (!p) return null;
      let char = key[i];
      p = p.get(char);
    }
    return p;
  }
  // 搜索 key 对应的值，不存在则返回 null
  get(key) {
    let x = this.getNode(this.root, key);
    if (x === null || x.val === null) return null;
    return x.val;
  }
  containsKey(key) {
    return this.get(key) !== null;
  }
  hasKeyWithPrefix(prefix) {
    return this.getNode(this.root, prefix) !== null;
  }
  shortestPrefixOf(query) {
    let p = this.root;
    for (let i = 0; i < query.length; i++) {
      if (p === null) return '';
      if (p.val != null) return query.substring(0, i);
      let c = query.charAt(i);
      p = p.children[c];
    }
    if (p !== null && p.val !== null) return query;
    return '';
  }
  longestPrefixOf(query) {
    let p = this.root;
    let max = 0;
    for (let i = 0; i < query.length; i++) {
      if (!p) break;
      if (p.val) max = i;
      let c = query[i];
      p = p.get(c);
    }
    if (!p && !p.val) return query;
    return query.substring(0, max);
  }
  keysWithPrefix(prefix) {
    let res = [];
    let x = this.getNode(this.node, prefix);
    if (!x) return res;
    traverse(x, '');
    return res;
    function traverse(node, path) {
      if (!node) return;
      if (node.val) res.push(path);
      for (let c = 0; c < node.R; c++) {
        path += c;
        traverse(node.get(c), path);
        path.substring(0, path.length - 1);
      }
    }
  }

  put(key, val) {
    if (!this.containsKey(key)) {
      this.size++;
    }

    function helper(node, key, val, i) {
      if (!node) return new TrieNode();
      if(i==key.length){
        node.val = val;
        return node
      }
      let c = key[i];
      
    }
  }
}
