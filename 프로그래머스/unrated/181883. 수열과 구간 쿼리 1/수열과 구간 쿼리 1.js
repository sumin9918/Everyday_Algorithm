function solution(arr, queries) {
    return queries.reduce((acc, [s, e]) => acc.map((n, i) => i >= s && i <= e ? n + 1 : n), arr)
}