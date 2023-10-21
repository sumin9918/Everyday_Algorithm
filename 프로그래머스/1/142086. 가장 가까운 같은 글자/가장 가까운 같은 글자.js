function solution(s) {
    return [...s].map((str, idx) => s.slice(0, idx).includes(str) ? (idx - s.slice(0, idx).lastIndexOf(str)) : -1);
}