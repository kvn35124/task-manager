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
        const dataToInsert = req.body;
        dataToInsert.due_date = new Date(dataToInsert.due_date);
        const results = await db.tasks.create(req.body.user_id, req.body.task_name, req.body.task_description, dataToInsert.due_date);
        console.log(req.body);
        res.json("event saved");
    } catch (error) {
        console.log(error);
        res.status(500).json('Broken code on task post');
    }
})

router.get('/api/tasks/:id', async (req, res) => {
    try {
        let results = await db.tasks.getOne(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json('Broken code');
    }
})





export default router;