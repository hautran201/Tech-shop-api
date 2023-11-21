import jwt from 'jsonwebtoken';

export const generateToken = () => {
    return jwt.sign();
};
