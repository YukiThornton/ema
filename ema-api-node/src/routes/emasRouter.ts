import express from 'express';
import dbClient from '../persistence/db-client';

const router = express.Router();

router.get('/', async (req, res) => {
    const emas = (await dbClient.getAllEmas()).sort((a, b) => a.id > b.id ? 1 : 0);
    return res.json({emas})
});

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

export default router;
