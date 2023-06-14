function solution(numlist, n) {
    return numlist.map(v => v - n).sort((a, b) => {
        if (Math.abs(a) === Math.abs(b)) return b
        
        return Math.abs(a) - Math.abs(b)
    }).map(v => v + n);
}