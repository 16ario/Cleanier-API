import Express from 'express';
import * as ProductController from '../controllers/products.controller';
import { authenticateJWT } from '../middlewares/authenticatejwt';

const app = Express();
//The routes that link Postman to the product table.
app.get('/', async (_req, res) => {
  await ProductController.getAll(res);
})
app.get('/:id', async (req, res) => {
  await ProductController.getById(req,res);
})
app.post('/',authenticateJWT, async (req, res) => {
  await ProductController.create(req, res);
})
app.put('/:id',authenticateJWT, async (req, res) => {
  await ProductController.updateById(req, res);
})
app.delete('/:id',authenticateJWT, async (req, res) => {
  await ProductController.deleteById(req, res);
})
export default app;
