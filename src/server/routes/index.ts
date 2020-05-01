import * as express from 'express';
import tasksRouter from './Tasks';

const router = express.Router();

router.use(tasksRouter);

export default router;