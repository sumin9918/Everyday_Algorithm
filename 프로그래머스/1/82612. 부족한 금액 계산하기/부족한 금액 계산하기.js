function solution(price, money, count) {
    let counts = 0;
    
    for (let i = 1; i <= count; i++) counts += i;
    
    const difference = money - (counts * price);

    return difference > 0 ? 0 : difference * -1;
}