import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('Gets all users');
});

export default userRouter;