const connection = require('./connection');

async function getAll() {
    let selectSql = `SELECT * FROM base_slimes`;
    return await connection.query(selectSql);
}

module.exports = {
    getAll
}