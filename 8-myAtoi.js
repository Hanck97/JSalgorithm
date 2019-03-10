/**
 * @param {string} str
 * @return {number}
 */

 
var myAtoi = function (str) {
    const regex = /\s*([-+])?(\d*)/
    const match = str.match(regex);
    let number = Number(match[1] === '-' ? -1 : 1) * Number(match[2] || 0);
    if (number > (2 ** 31 - 1)) {
        number = 2 ** 31 - 1;
    }
    if (number < -(2 ** 31)) {
        number = -(2 ** 31);
    }
    return number;
};