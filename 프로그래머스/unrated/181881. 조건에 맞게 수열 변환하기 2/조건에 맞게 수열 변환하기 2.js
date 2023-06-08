const convert = (arr, count) => {
    let target = arr;

    for(let i = 0; i < count; i++) {
        target = target.map(n => {
            if(n % 2 === 0 && n >= 50) return n / 2;
            if(n % 2 === 1 && n < 50) return n * 2 + 1;
            
            return n;
        });
    }
        
    return target;
}

function solution(arr) {
    let count = 0;
    
    while(true) {
        if(JSON.stringify(convert(arr, count)) === JSON.stringify(convert(arr, count + 1))) return count;
        else count++;
    }
}