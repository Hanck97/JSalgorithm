/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a,b) => a - b);
  if(arr.length%2 == 0) {
      const index = arr.length / 2;
      return (arr[index] + arr[index - 1])/2;
  } else {
      return arr[Math.floor(arr.length/2)];
  }
};