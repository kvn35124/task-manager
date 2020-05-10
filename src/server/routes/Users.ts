import * as express from 'express'
import db from '../db';
import { hashPassword } from '../utilities/passwords';


const router = express.Router();

router.post('/api/users', async (req, res) => {
    try {
        req.body.password = hashPassword(req.body.password);
        let results = await db.users.createUser(req.body.username, req.body.password);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json('username POST broken');
    }
})


export default router;


