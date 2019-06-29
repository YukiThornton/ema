import express from 'express';
import dbClient from '../persistence/db-client';
import Ema from '../models/ema';

const router = express.Router();

function createResultJson(ema: Ema) {
    return {
        result: 'ok',
        ema: ema,
    }
}

router.post('/', async (req, res) => {
    const createdEma = await dbClient.saveEma(req.body);
    return res.status(201).json(createResultJson(createdEma));
})

export default router;
