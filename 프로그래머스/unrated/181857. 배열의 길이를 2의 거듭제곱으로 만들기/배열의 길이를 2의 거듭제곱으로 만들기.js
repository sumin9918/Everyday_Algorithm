function solution(arr) {
    const length = arr.length;
    let n = 0;

    for (n; n < 10; n++) {
        if (2 ** n >= length) break;
    }
    
    for (let i = 0; i < 2 ** n; i++) {
        if (arr[i]) continue;
        
        arr.push(0);
    }
    
    return arr;
}