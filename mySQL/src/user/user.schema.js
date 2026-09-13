export const UserModels = {
id: { type: 'INT', autoIncrement: true, primaryKey: true, required: false}, // ไม่จ าเป็นต้องก าหนดค่า เพราะเป็น AUTO_INCREMENT
u_name: { type: 'VARCHAR', length: 50, required: true}, // จ าเป็นต้องมีค่า
u_birth_date: { type: 'DATE', required: true}, // จ าเป็นต้องมีค่า
email: { type: 'VARCHAR', length: 100, required: false}, // ไม่จ าเป็นต้องมีค่า
phone_number: { type: 'VARCHAR', length: 15, required: false}, // ไม่จ าเป็นต้องมีค่า
address: { type: 'TEXT', required: false}, // ไม่จ าเป็นต้องมีค่า
salary: { type: 'DECIMAL', precision: 10, scale: 2, required: false}, // ไม่จ าเป็นต้องมีค่า
is_active: { type: 'BOOLEAN', defaultValue: 1, required: false}, // ค่าเริ่มต้นเป็น 1
role_id: {

        type: 'INT',
        required: false, // ไม่จ าเป็นต้องมีค่า
foreignKey: {

        table: 'roles', // ชื่อตารางที่อ้างอิง
        column: 'id', // คอลัมน์ที่อ้างอิง
        onDelete: 'CASCADE', // ลบข้อมูลที่เกี่ยวข้องด้วย
        onUpdate: 'CASCADE' // อัปเดตข้อมูลที่เกี่ยวข้อง
    }
},
created_at: { type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP', required: false}, // ค่าเริ่มต้นเป็น CURRENT_TIMESTAMP
updated_at: { type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', required: false }
// ค่าเริ่มต้นเป็น CURRENT_TIMESTAMP และอัปเดตอัตโนมัติ
};
export const TableName = "users"; // ชื่อตารางในฐานข้อมูล