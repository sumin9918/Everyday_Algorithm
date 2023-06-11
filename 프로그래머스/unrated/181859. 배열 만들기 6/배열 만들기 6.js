function solution(arr) {
    const stk = arr.reduce((acc, v) => acc[acc.length - 1] === v ? acc.slice(0, acc.length - 1) : [...acc, v], []);
    
    return stk.length ? stk : [-1];
}