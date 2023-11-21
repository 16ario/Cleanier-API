import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
const port = 3002

app.use(bodyParser.json());
//Create the localhost(http://localhost:3000/).
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  res.send('I\'m a post request')
})
import category from './routes/categories.route'
import order from './routes/orders.route'
import product from './routes/products.route'
import user from './routes/users.route'

app.use(cors())
app.use('/category',category)
app.use('/order',order)
app.use('/product',product)
app.use('/user',user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
