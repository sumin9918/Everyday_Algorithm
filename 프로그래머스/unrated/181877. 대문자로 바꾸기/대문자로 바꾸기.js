function solution(myString) {
    return myString.replace(/[a-z]/g, str => str.toUpperCase())
}