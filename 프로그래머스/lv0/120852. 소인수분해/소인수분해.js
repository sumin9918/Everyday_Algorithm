const isPrime = n => Array.from({length: n}, (_, i) => i + 1).filter(v => n % v === 0).length === 2;

function solution(n) {
    return Array.from({length: n}, (_, i) => i + 1).filter(v => n % v === 0 && isPrime(v))
}