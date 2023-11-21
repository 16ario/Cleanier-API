import Express from 'express';
import * as UserController from '../controllers/users.controller';
import { authenticateJWT } from '../middlewares/authenticatejwt';

const app = Express();
//The routes that link Postman to the user table.
app.get('/', async (_req, res) => {
  await UserController.getAll(res); 
})
app.get('/:id', async (req, res) => {
  await UserController.getById(req,res);
})
app.put('/:id', authenticateJWT, async (req, res) => {
  await UserController.updateById(req, res);
})
app.delete('/:id', authenticateJWT, async (req, res) => {
  await UserController.deleteById(req, res);
})
 app.post('/register', async (req, res) => {
await UserController.register(req, res);
})
app.post('/login', async (req, res) => {
 await UserController.login(req, res);
});

export default app;
