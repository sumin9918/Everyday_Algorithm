function solution(price) {
    const discount = price >= 100000 ? (price >= 300000 ? (price >= 500000 ? 0.2 : 0.1) : 0.05) : 0;
    
    return Math.floor(price * (1 - discount));
}