/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b);
    let res = nums[0] + nums[1] + nums[2];
    let abs = Math.abs(res - target);
    for(let i=0; i<nums.length; i++) {
        let start = i+1;
        let end = nums.length-1;
        while(start < end){
            let temp = nums[i]+nums[start]+nums[end];
            if(Math.abs(temp - target) < abs){
                res = temp;
                abs = Math.abs(temp - target)
            } 
            if(temp < target){
                start++;
            }else if(temp > target){
                end--;
            }else{
                return temp; // 若temp=target，直接输出结果
            }
        }
    }
};