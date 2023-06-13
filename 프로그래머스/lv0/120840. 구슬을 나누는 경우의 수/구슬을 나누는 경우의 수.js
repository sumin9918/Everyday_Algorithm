const factorial = n => new Array(n).fill(0).reduce((acc, _, i) => acc * (n - i), 1);

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}