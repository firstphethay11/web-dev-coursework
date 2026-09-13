import mysql from 'mysql2';
import 'dotenv/config';

// ใช้ Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

// ทดสอบการเชื่อมต่อ
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Cannot connect to MySQL:", err.message);
        return;
    }
    console.log(`Connected to MySQL as id: ${connection.threadId}`);
    connection.release();
});

export default pool;