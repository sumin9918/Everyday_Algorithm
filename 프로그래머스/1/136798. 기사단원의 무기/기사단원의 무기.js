function solution(number, limit, power) {
    return Array.from({length: number}, (_, i) => i + 1).map(n => {
        let count = 0;
        
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) count += 1;
        }

        count = count * 2 + (Number.isInteger(Math.sqrt(n)) && -1);
        
        return count > limit ? power : count;
    }).reduce((acc, n) => acc + n, 0);
}