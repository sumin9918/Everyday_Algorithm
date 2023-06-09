function solution(num_list) {
    return num_list.reduce((acc, n) => {
        let count = 0;
        
        while (n > 1) {
            n = (n - +(n % 2)) / 2;
            count += 1;
        }
        
        return acc + count;
    }, 0);
}