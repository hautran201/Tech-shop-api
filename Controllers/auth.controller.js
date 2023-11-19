import bcrypt from 'bcrypt';

import User from '../Models/user.model.js';

export const register = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        return res.status(409).json('Account already exists');
    }

    try {
        const hashPassword = bcrypt.hashSync(password, 12);
        const newUser = {
            ...req.body,
            email: email.toLowerCase(),
            password: hashPassword,
        };
        const createUser = await User.create(newUser);

        if (!createUser) {
            return res.status(400).json({
                status: 'Fail',
                error: 'Có lỗi trong quá trình tạo tài khoản, vui lòng thử lại.',
            });
        }

        res.status(200).json({
            status: 'Success',
            user: { username: createUser.username, email: createUser.email },
        });
    } catch (err) {
        res.status(500).json({ status: 'Error', err: err.errors });
    }
};
