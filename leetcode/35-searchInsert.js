/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums.indexOf(target) > -1) {
    return nums.indexOf(target);
  } else {
    nums.map((item, index) => {
      if(target >= item) {
        return index + 1;
      } else {
        return 0;
      }
    })
  }
};