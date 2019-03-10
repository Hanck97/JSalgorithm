/**
 * @param {number} x
 * @return {number}
 * input: 123  -123
 * outpus: 321 -321
 * 
 */
var reverse = function(x) {
    x = x.toString();
    let arr = x.split('');
    let reverseArr = [];
    if (arr[0] === '-') {
        arr.shift();
        reverseArr.push('-');
    }
    reverseArr = reverseArr&&reverseArr.length ? reverseArr.concat(arr.reverse()) : arr.reverse();
    if (reverseArr[0] === '0') {
        reverseArr.shift();
    }
    if (-Math.pow(2, 31) > Number(reverseArr.join('')) || Math.pow(2, 31) - 1 < Number(reverseArr.join(''))) {
    return 0;
}
    return Number(reverseArr.join(''))
};