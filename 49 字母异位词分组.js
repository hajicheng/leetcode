/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const num = new Map();
    for(const str of strs) {
        const key = str.split('').sort().join('');
        if (!num.has(key)){
            num.set(key, []);
        }
         num.get(key).push(str); 
    }
     return Array.from(num.values());
};