function solution(order) {
    return order.reduce((acc, menu) => menu.includes('cafelatte') ? acc + 5000 : acc + 4500, 0)
}