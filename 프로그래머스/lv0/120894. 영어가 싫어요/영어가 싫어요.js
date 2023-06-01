const object_numbers = {
    zero : 0,
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9,
}

function solution(numbers) {
    let result = '';
    
    for (let i = 0; i < numbers.length; i++ ) {
        let w = numbers[i];
        
        for (let j = i + 1; j < numbers.length; j++) {
            if (object_numbers[w] || object_numbers[w] === 0) break;
            
            w = w + numbers[j];
            i++;
        }
        
        result += object_numbers[w];
    }
    
    return Number(result);
}