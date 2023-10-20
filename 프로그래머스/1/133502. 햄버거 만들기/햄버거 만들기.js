function solution(ingredient) {
    let count = 0;
    let stack = [];
    
    ingredient.forEach(n => {
        const max = stack.length;

        if (n === 1 && stack[max-1] === 3 && stack[max-2] === 2 && stack[max-3] === 1) {
            for (let i = 0; i < 3; i++) stack.pop();
            count += 1;
        } else stack.push(n);
    });
    
    return count;
}