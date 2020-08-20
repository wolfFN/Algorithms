/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let sumsMap = new Map([[0, 1]]);
    
    for (let num of nums) {
        const next = new Map();
        for (let [sum, amount] of sumsMap) {
            let plus = sum + num;
            let minus = sum - num;
            
            next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
            next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
        }
        sumsMap = next;
    }
    
    
    return sumsMap.get(S) || 0;
};