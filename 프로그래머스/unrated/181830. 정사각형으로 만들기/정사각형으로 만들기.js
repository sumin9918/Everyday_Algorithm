function solution(arr) {
    const l = arr.length;
    const vl = arr[0].length;
    
    if (l > vl) {
        return arr.map((v) => [...v, ...new Array(l - vl).fill(0)])
    } else {
        return [...arr, ...new Array(vl - l).fill(new Array(vl).fill(0))]
    }
}