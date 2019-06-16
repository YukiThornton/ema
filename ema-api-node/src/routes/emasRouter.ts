import express from 'express';
import dbClient from '../persistence/db-client';

const router = express.Router();

router.get('/', async (req, res) => {
    const emas = await dbClient.getAllEmas();
    return res.json({emas})
});

export default router;
