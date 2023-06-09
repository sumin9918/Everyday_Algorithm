function solution(arr, flag) {
    return flag.reduce((acc, f, i) => f ? [...acc, ...new Array(arr[i] * 2).fill(arr[i])] : acc.slice(0, acc.length - arr[i]), []);
}