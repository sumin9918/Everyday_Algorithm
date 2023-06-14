function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    
    let common = 1;
    
    for (let i = 0; i <= denom; i++) {
        if (denom % i === 0 && numer % i === 0) common = i;
    } 
    
    return [numer / common, denom / common];
}