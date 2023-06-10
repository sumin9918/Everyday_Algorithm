function solution(arr, n) {
    return arr.map((element, i) => arr.length % 2 ^ i % 2 ? element + n : element)
}