import { Product } from "../database/models/product"
import { Request, Response } from  'express';
//the controllers to create, update and delete in the product table.
async function productcreate(req: Request) {
    const Category = req.query.category;
    const Description = req.query.description;
    const Price = req.query.price;
    const Capacity = req.query.capacity;
    const Product_name = req.query.product_name;
  
    await Product.create({ 
        category : Category, descriptions : Description, price : Price, capacity : Capacity, product_name : Product_name,
    });
  }
  async function productupdate(req: Request, res: Response) {
    const aaa = await Product.findOne({where: {id: req.params.id}});
    if (aaa === null) {
      res.send('Not found');
    }
    else {
      await Product.update({
        category: req.query.category,
        description: req.query.description,
        price: req.query.price,
        capacity: req.query.capacity,
        product_name: req.query.phone_number,
      }, {where: {id: req.params.id}});
    }
  }
  async function productdelete(req: Request, res: Response) {
      const id = req.params.id;
      await Product.destroy({ where: { id } });
      res.json();
  }

export { productcreate };
export { productupdate };
export { productdelete };
