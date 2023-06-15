function solution(numbers) {
    return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}