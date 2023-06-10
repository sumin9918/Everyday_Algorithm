function solution(arr, delete_list) {
    return arr.filter(v => !delete_list.some(d => d === v))
}