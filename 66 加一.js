/**方法一
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


/**方法二
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    let len = digits.length - 1;
    let sum = 0;
    while(carry!==0){
        if(len < 0){
            digits.unshift(1);
            carry = 0;

        }
        else{
        sum = digits[len] + carry;
        carry = (sum/10)|0;
        digits[len] = sum%10;
        len--;
        }

    }
    return digits;
};


