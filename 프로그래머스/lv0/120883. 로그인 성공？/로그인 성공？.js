function solution(id_pw, db) {
    const filteredDb = db.filter(data => data[0] === id_pw[0]).flat();
    
    return filteredDb.length ? filteredDb[1] === id_pw[1] ? 'login' : 'wrong pw' : 'fail';
}