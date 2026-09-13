import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

//ใช้ Connection Pool
const pool = mysql.createPool({
host : process.env.MYSQL_HOST,
user : process.env.MYSQL_USER,
password : process.env.MYSQL_PASSWORD,
database : process.env.MYSQL_DB_NAME,
waitForConnections: true, //ถ้า connection เต็ม ให้รอแทนที่จะ error ทันที
connectionLimit: 10, // จ านวน connection สูงสุด
queueLimit: 0 // ถ้า 0 = ไม่จ ากัดจ านวนค าสั่งที่รอ
});

// wrapper query (Promise-based)
export const doQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// ทดสอบการเชื่อมต่อ
pool.getConnection((err, connection) => {
    if (err) {
    console.error(`Cannot connect MySQL: ${err.message}`);
    return;
    } 
    console.log(`Connected MySQL as id: ${connection.threadId}`);
    connection.release(); // คืน connection ให้ pool
});

export default pool;