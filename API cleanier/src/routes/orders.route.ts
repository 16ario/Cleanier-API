import Express from 'express';
import * as OrderController from '../controllers/orders.controller';
import { authenticateJWT } from '../middlewares/authenticatejwt';

const app = Express();
//The routes that link Postman to the order table.
app.get('/', async (_req, res) => {
  await OrderController.getAll(res);
  res.status(200).send()
})
app.get('/:id', async (req, res) => {
  await OrderController.getById(req,res);
  res.status(200).send()
})
app.post('/',authenticateJWT, async (req, res) => {
  await OrderController.create(req, res);
  res.status(200)
})
app.put('/:id',authenticateJWT, async (req, res) => {
  await OrderController.updateById(req, res);
  res.status(200)
})
app.delete('/:id',authenticateJWT, async (req, res) => {
  await OrderController.deleteById(req, res);
  res.status(204)
})
export default app;
