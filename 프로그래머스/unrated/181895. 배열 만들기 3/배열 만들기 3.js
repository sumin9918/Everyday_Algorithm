function solution(arr, intervals) {
    return intervals.map(([s, e]) => arr.filter((_, i) => i >= s && i <= e)).flat()
}