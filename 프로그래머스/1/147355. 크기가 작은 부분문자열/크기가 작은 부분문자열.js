function solution(t, p) {
    const length = p.length;
    const arr = [];
    
    for (let i = 0; i < t.length - length + 1; i++) {
        arr.push(t.slice(i, i + length) * 1);
    };
    
    return arr.filter(v => v <= p).length;
}