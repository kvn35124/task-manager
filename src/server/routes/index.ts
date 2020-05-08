import * as express from 'express';
import tasksRouter from './Tasks';
import usersRouter from './Users';

const router = express.Router();

router.use(tasksRouter);
router.use(usersRouter);

export default router;