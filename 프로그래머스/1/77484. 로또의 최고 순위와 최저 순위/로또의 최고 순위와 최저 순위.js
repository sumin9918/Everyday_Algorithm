const ranks = [6, 6, 5, 4, 3, 2, 1];

function solution(lottos, win_nums) {
    const w = lottos.filter(n => win_nums.includes(n)).length;
    const x = lottos.filter(n => !n).length;
    
    return [ranks[w + x], ranks[w]];
}