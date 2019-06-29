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

function createErrorResultJson() {
  return {
    result: 'failed',
    cause: 'The text is empty'
  }
}

router.post('/', async (req, res) => {
  const ema = req.body as Ema;
  if (!ema.content || !ema.content.text) {
    return res.status(400).json(createErrorResultJson())
  }
  const createdEma = await dbClient.saveEma(ema);
  return res.status(201).json(createResultJson(createdEma));
})

export default router;
