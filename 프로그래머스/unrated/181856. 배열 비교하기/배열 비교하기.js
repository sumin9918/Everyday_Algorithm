const sum = arr => arr.reduce((acc, n) => acc + n, 0);

function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1;
    else if (arr1.length < arr2.length) return -1;
    
    return sum(arr1) > sum(arr2) ? 1 : sum(arr1) < sum(arr2) ? -1 : 0;
}