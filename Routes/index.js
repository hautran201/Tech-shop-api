import userRouter from './user.routes.js';
import authRouter from './auth.routes.js';

const Router = (app) => {
    app.use('/users', userRouter);
    app.use('/auth', authRouter);
};

export default Router;
