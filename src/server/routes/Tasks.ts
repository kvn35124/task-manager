import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let results = await db.tasks.getAll();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json('Broken Code on tasks get');
    }
})

router.get('/:id', async (req, res) => {
    try {
        let results = await db.tasks.getOne(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json('Broken code on task get one');
    }
})


export default router;