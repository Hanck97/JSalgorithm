/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (nums[i] === nums[j]) {
            nums.splice(j, 1);
        }
    }
    return nums.length;
};

var removeDuplicates2 = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};