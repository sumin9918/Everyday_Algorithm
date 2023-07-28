function solution(arr)
{
    let answer = []
    let preN = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (preN === arr[i]) continue;
        
        answer.push(arr[i]);
        preN = arr[i];
    }
    
    return answer;
}