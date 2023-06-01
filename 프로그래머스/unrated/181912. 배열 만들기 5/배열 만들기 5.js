function solution(intStrs, k, s, l) {
    const arr = intStrs.map(intStr => Number([...intStr].splice(s, l).join('')));
    return arr.filter(element => element > k);
}