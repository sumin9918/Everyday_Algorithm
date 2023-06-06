function solution(todo_list, finished) {
    return finished.reduce((acc, cur, idx) => cur ? acc : [...acc, todo_list[idx]], [])
}