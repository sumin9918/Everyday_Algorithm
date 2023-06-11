function solution(n) {
    return new Array(n).fill(0).reduce((acc, cur, i) => [...acc, Array.from({length: n}, (_, idx) => +(i === idx))], [])
}