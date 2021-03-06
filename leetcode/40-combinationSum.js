/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 动态规划
var combinationSum2 = function(candidates, target) {
    var dp = [];
    candidates.sort((a, b) => a - b);
    for (let i = 0; i <= target; i++) {
        dp[i] = new Set();
    }

    dp[0].add('');

    for (let c of candidates) {
        for (let i = target; i >=c; i--) {
            for(item of dp[i - c]) {
                debugger;
                dp[i].add(item + ',' + c);
            }
        }
    }


    return Array.from(dp[target]).map(item => item.slice(1).split(','));

};

// 回溯
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var result = [], n = candidates.length
  
    function backtrack(start, sum, list) {
      if (sum === target) {
        result.push(list)
      }
      for (let i = start; i < n; i++) {
        if (candidates[i] + sum > target) break;
        //相同数字只允许循环的第一个递归，避免重复
        if (candidates[i] === candidates[i - 1] && i > start) continue;
        backtrack(i + 1, sum + candidates[i], [...list, candidates[i]])
      }
    }
  
    backtrack(0, 0, [])
  
    return result
}
