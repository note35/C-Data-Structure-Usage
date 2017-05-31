import express from 'express';
import Promise from 'promise';

const exampleRouter = express.Router();

exampleRouter.get('/test', async function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 'example': true }));
});


export default exampleRouter;
