const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'root',
    password: 'Password123!',
    connectionLimit: 5
});

function asyncFunction() {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection();
            const rows = await conn.query("SELECT 'o laube é um bobão' AS message");
            resolve(rows);
            return;
            const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

        } catch (err) {
            reject(err);
            return;
        } finally {
            if (conn) return conn.end();
        }
    })
}

module.exports = {
    asyncFunction
}