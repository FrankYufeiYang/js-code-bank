/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  nums = shuffle(nums);
  sort(nums, 0, nums.length - 1);
  return nums;
  function sort(nums, left, right) {
    if (left > right) {
      return;
    }
    let p = privot(nums, left, right);
    sort(nums, left, p - 1);
    sort(nums, p + 1, right);
  }
  function privot(nums, left, right) {
    let temp = nums[left];
    let i = left,
      j = right;
    while (i < j) {
      while (i < j && nums[j] >= temp) {
        j--;
      }
      nums[i] = nums[j];
      while (i < j && nums[i] <= temp) {
        i++;
      }
      nums[j] = nums[i];
    }
    nums[i] = temp;
    return i;
  }
  function shuffle(nums) {
    for (let i = 0; i < nums.length; i++) {
      let r = getRndInteger(i, nums.length - 1);
      [nums[i], nums[r]] = [nums[r], nums[i]];
    }
    return nums;
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
