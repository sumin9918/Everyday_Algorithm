function solution(s) {
    return s.split(' ').map(str => str.split('').map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join('')).join(' ');
}