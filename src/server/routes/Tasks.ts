import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/api/tasks', async (req, res) => {
    try {
        let results = await db.tasks.getAll();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json('Broken Code on tasks get');
    }
})

router.post('/api/tasks', async (req, res) => {
    try {
        let results = await db.tasks.create(req.body.user_id, req.body.task_name, req.body.task_description, req.body.due_date);
        console.log(req.body);
        res.json("event saved");
    } catch (error) {
        console.log(error);
        res.status(500).json('Broken code on task post');
    }
})





export default router;