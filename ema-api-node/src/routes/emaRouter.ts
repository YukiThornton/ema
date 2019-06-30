import express from 'express';
import dbClient from '../persistence/db-client';
import Ema from '../models/ema';

const router = express.Router();

router.get('/', async (req, res) => {
    const emas = (await dbClient.getAllEmas()).sort((a, b) => a.id > b.id ? 1 : 0);
    return res.json({emas})
});

router.post('/', async (req, res) => {
  const body = req.body;
  if (!body.content || !body.content.text) {
    return res.status(400).json(createErrorResultJson())
  }
  const createdEma = await dbClient.saveEma(Number(body.userId), body.type, body.status, body.content.text);
  return res.status(201).json(createResultJson(createdEma));
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await dbClient.deleteEma(req.params.id)
    if (result === 1) {
      return res.status(200).json({result: 'ok'})
    }
    return res.status(404).json({result: 'Not found'})
  } catch (e) {
    return res.status(500).json({result: 'Error'})
  }
})

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

export default router;
