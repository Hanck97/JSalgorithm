/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ResultArr = [];
    if (strs.length === 0) {
        return '';
    } else if (strs.length === 1) {return strs[0]}

        for (let i=0; i<strs[0].length; i++){
            let item = strs[0].slice(0, i+1);
            if(strs.every(function(str){return str.indexOf(item) === 0})) {
                ResultArr.push(item);
            }
            
        }
    if (ResultArr.length === 0) {
        return ''
    } else {
        return ResultArr[ResultArr.length -1];
    }
}
