const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Hàm thực hiện truy vấn trả về Promise
const performQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        pool.execute(query, params, (err, results) => {
            if (err) {
                console.error("Lỗi truy vấn:", err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = { performQuery };
