const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function solution(a, b) {
    return day[new Date(2016, a - 1, b, 9).getDay()];
}