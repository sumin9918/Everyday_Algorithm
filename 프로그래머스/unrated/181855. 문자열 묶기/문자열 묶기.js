function solution(strArr) {
    return Math.max(...strArr.reduce((acc, str) => {
        acc[str.length - 1] += 1;
        return acc;
    }, new Array(30).fill(0)))
}