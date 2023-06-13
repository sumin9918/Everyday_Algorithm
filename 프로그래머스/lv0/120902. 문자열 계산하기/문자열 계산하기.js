function solution(my_string) {
    return my_string.split(' ').reduce((acc, cur, i, arr) => i % 2 ? (cur === '+' ? acc + +arr[i+1] : acc - arr[i+1]) : acc, +my_string.split(' ')[0]);
}