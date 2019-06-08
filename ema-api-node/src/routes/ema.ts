import express from 'express';

const router = express.Router();

const localEmaCreationResult = {
    result: 'ok',
    ema: {
        'id': 99,
        'user-id': 1,
        'type': 'wish',
        'status': 'open',
        'content': {
            text: 'localEmaCreationResult',
        },
    },
};

router.post('/', (req, res) => res.status(201).json(localEmaCreationResult))

export default router;
