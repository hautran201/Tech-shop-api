import mongoose from 'mongoose';

const mongodbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT).then(() => {
            console.log('MongoDB connected successfully!');
        });
    } catch (error) {
        console.error(error.message);
    }
};

export default mongodbConnect;
