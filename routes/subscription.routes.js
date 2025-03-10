import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req , res) => {
    res.send('Gets all subscriptions');
});

export default subscriptionRouter;