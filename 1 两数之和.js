/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const diffs = new Map();
    const len = nums.length;
    for(let i = 0; i<len ;i++){
        const complement = target - nums[i];
        if(diffs.has(complement)){
            return [diffs.get(complement),i];
        }
        diffs.set(nums[i],i);

    }
};