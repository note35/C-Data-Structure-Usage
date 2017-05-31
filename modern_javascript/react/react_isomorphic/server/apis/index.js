import express from 'express';

import exampleRouter from './example';

const router = express.Router();

router.use('/example', exampleRouter);

export default router;
