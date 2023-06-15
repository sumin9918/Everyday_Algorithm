function solution(array) {
    let count_array = new Array(1000).fill(0);
    
    array.forEach(v => count_array[v] += 1);
    
    const max = Math.max(...count_array);
    
    const index_array = count_array.reduce((acc, v, i) => v === max ? [...acc, i] : acc, []);
                                           
    return index_array.length === 1 ? index_array[0] : -1
}