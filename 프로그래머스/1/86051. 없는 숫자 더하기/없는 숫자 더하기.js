const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function solution(numbers) {
    return nums.filter(n => !numbers.includes(n)).reduce((acc, n) => acc + n, 0);
}