import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            default: '',
        },
        street: {
            type: String,
            default: '',
        },
        apartment: {
            type: String,
            default: '',
        },
        zip: {
            type: String,
            default: '',
        },
        city: {
            type: String,
            default: '',
        },
        country: {
            type: String,
            default: '',
        },
        phone: {
            type: String,
            required: [true, 'Please enter a phone number'],
            minLength: [10, 'no should have minimum 10 digits'],
            maxLength: [10, 'no should have maximum 10 digits'],
            match: [/\d{10}/, 'no should only have digits'],
        },
        username: {
            type: String,
            required: [true, 'Please enter a name'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter a email'],
            unique: true,
            validate: [validator.isEmail, 'Email is not valid'],
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            select: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

export default User;
