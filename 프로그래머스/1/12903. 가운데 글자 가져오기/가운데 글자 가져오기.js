function solution(s) {
    const start = Math.floor((s.length + 1) / 2) - 1;
    
    return s.slice(start, start + (s.length % 2 ? 1 : 2))
}