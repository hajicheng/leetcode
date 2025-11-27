/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const newDigits = [...digits]; // 把数组赋值给新的数组
    let n = digits.length - 1;
    for(n ; n >=0 ; n--) {
        newDigits[n]++;  
        if (newDigits[n] < 10) {
            return newDigits;
        }
        newDigits[n] = 0;
    }
    newDigits.unshift(1);
    return newDigits;
};