function solution(arr) {
    return arr.map(n => n >= 50 ? n / (n % 2 ? 1 : 2) : n * (n % 2 ? 2 : 1));
}