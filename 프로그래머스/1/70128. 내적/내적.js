function solution(a, b) {
    return a.reduce((acc, v, idx) => acc + (v * b[idx]), 0);
}