function solution(arr, flag) {
    return arr.reduce((acc, n, i) => flag[i] ? [...acc, ...new Array(n * 2).fill(n)] : acc.slice(0, -n), []);
}