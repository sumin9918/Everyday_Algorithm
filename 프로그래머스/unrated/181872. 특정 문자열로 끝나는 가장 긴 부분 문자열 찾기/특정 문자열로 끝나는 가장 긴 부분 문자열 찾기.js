function solution(myString, pat) {
    return [...myString].reduce((acc, _, i) => {
        return myString.slice(0, i + 1).endsWith(pat) ? myString.slice(0, i + 1) : acc
    }, '0')
}