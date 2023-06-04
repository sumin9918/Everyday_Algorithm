function solution(my_string, m, c) {
    let array = [];
    
    for (let i = 0; i < Math.floor(my_string.length / m); i++) {
        array = [...array, [...my_string.substring(m * i, m * (i + 1))]]
    }
    
    return array.map(element => element[c - 1]).join('')
}