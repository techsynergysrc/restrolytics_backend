import { Router } from 'express';

const authRouter = new Router();

authRouter.get('/', (req, res) => {
    res.send({title: 'Get all auth'});
});

export default authRouter;