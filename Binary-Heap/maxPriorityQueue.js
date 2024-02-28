// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码不保证正确性，仅供参考。如有疑惑，可以参照我写的 java 代码对比查看。

class MaxPQ {
  constructor(cap) {
    // 存储元素的数组
    //index 0 is not used
    this.pq = new Array(cap + 1);
    // 当前 Priority Queue 中的元素个数
    this.size = 0;
  }
  /* 返回当前队列中最大元素 */
  max() {
    return this.pq[1];
  }
  /* 插入元素 e */
  insert(e) {
    this.size++;
    this.pq[this.size] = e;
    this.swim(this.size);
  }
  /* 删除并返回当前队列中最大元素 */
  delMax() {
    var max = pq[1];
    // 把这个最大元素换到最后，删除之
    swap(1, size);
    pq[size] = null;
    size--;
    // 让 pq[1] 下沉到正确位置
    sink(1);
    return max;
  }
  /* 上浮第 x 个元素，以维护最大堆性质 */
  swim(x) {
    while (x > 1 && less(parent(x), x)) {
      swap(parent(x), x);
      x = parent(x);
    }
  }
  /* 下沉第 x 个元素，以维护最大堆性质 */
  sink(x) {
    // 如果沉到堆底，就沉不下去了
    while (left(x) <= size) {
      // 先假设左边节点较大
      var max = left(x);
      // 如果右边节点存在，比一下大小
      if (right(x) <= size && less(max, right(x))) max = right(x);
      // 结点 x 比俩孩子都大，就不必下沉了
      if (less(max, x)) break;
      // 否则，不符合最大堆的结构，下沉 x 结点
      swap(x, max);
      x = max;
    }
  }
  /* 交换数组的两个元素 */
  swap(i, j) {
    var temp = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = temp;
  }
  /* pq[i] 是否比 pq[j] 小？ */
  less(i, j) {
    return this.pq[i] < this.pq[j];
  }
}

/* 还有 left, right, parent 三个方法 */
