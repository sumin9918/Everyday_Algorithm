function solution(my_string, queries) {
    return queries.reduce((acc, [s, e]) => {

        const new_string = [...acc].splice(s, e - s + 1).reverse();

        acc.splice(s, new_string.length, ...new_string);

        return acc;
    }, [...my_string]).join('');
}