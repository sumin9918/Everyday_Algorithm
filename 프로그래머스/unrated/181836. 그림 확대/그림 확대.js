function solution(picture, k) {
    return picture.reduce((acc, p) => [...acc, ...new Array(k).fill(p.replace(/[x|.]/g, str => str.repeat(k)))], []);
}

