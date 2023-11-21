import Express from 'express';
import * as CategoryController from '../controllers/categories.controller';
import { authenticateJWT } from '../middlewares/authenticatejwt';

const app = Express();

app.get('/', CategoryController.getAll);
app.get('/:id', async (req, res) => {
  await CategoryController.getById(req,res);
  res.status(200).send()
})
app.post('/',authenticateJWT, async (req, res) => {
  await CategoryController.create(req, res);
  res.status(200)
})
app.put('/:id',authenticateJWT, async (req, res) => {
  await CategoryController.updateById(req, res);
  res.status(200)
})
app.delete('/:id',authenticateJWT, async (req, res) => {
  await CategoryController.deleteById(req, res);
  res.status(204)
})
export default app;