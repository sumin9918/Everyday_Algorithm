function solution(n) {
    return Array.from({length: n}, (_, i) => (i+1) % 2 && i+1).filter(v => v);
}