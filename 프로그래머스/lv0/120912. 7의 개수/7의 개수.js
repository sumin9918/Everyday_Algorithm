function solution(array) {
    return array.reduce((acc, cur) => acc + String(cur).split('').filter(str => str === '7').length, 0);
}