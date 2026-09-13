import UserService from './services/user.service.js';

const UserController = {
  addUser: async (req, res) => {
    try {
      const {
        u_name,
        u_birth_date,
        email,
        phone_number,
        address,
        salary,
        is_active,
        role_id
      } = req.body;

      // ตรวจสอบข้อมูลที่จำเป็น
      if (!u_name || !u_birth_date) {
        return res.status(400).json({
          success: false,
          message: 'u_name และ u_birth_date เป็นข้อมูลที่จำเป็น'
        });
      }

      // สร้าง user ใหม่
      const created = await UserService.createUser({
        u_name,
        u_birth_date,
        email: email || null,                  // ค่า default null ถ้าไม่มี
        phone_number: phone_number || null,
        address: address || null,
        salary: salary || null,
        is_active: typeof is_active === 'boolean' ? is_active : true, // default true
        role_id: role_id || null
      });

      // ส่ง response กลับ client
      res.status(201).json({
        success: true,
        data: created,
        URL: req.url
      });

    } catch (error) {
      console.error('Error in addUser:', error);

      res.status(500).json({
        success: false,
        message: 'เกิดข้อผิดพลาดในระบบ',
        error: error.message
      });
    }
  }
};

export default UserController;
