class MaxPQ {
  constructor() {
    this.pq = new Array();
    this.length = 0;
  }
  insert(value) {
    this.pq[++this.length] = value;
    this.moveUp(this.length);
  }

  popMax() {
    const max = this.pq[1]
    this.swap(1, this.length);
    this.pq[this.length] = null;
    this.length--;
    this.moveDown(1)
    return max
  }

  // 父节点的索引
  parent(root) {
    return Math.floor(root / 2);
  }
  // 左孩子的索引
  left(root) {
    return root * 2;
  }
  // 右孩子的索引
  right(root) {
    return root * 2 + 1;
  }
  max() {
    return this.pq[1];
  }
  less(i, j) {
    return this.pq[i] < this.pq[j];
  }
  swap(i, j) {
    [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
  }
  moveUp(i) {
    while (i > 1 && this.less(this.parent(i), i)) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }
  moveDown(i) {
    while (this.left(i) <= this.length) {
      let max = this.left(i);
      if (this.right(i) <= this.length && this.less(max, this.right(i))) {
        max = this.right(i);
      }
      if (this.less(max, i)) break;
      this.swap(i, max);
      i = max;
    }
  }
}

//test
let maxPQ = new MaxPQ();
maxPQ.insert(-1);
maxPQ.insert(2);
maxPQ.insert(10);
maxPQ.insert(8);
maxPQ.insert(9);
maxPQ.insert(100);
maxPQ.insert(5);
console.log(maxPQ.pq);
while(maxPQ.length){
  console.log(maxPQ.popMax());
}

