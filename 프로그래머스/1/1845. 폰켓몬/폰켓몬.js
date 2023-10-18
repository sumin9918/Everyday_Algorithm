function solution(nums) {
    const takeN = Math.floor(nums.length / 2);
    const typeN = [...new Set(nums)].length;
    
    return takeN > typeN ? typeN : takeN;
}