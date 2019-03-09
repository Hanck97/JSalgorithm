/**
 * @param {array} 
 * @return {number}
 * input: [2, 2, 1, 4, 4, 5, 5, 1, 8]
 * outpus: 8
 * 
 */

function singleNumber (nums) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[num[i]] + 1 : 1;
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return Number(key);
        }
    }
}