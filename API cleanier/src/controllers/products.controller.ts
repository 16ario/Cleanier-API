import { Product } from "../database/models/product";
import { Request, Response } from  'express';
import { productcreate, productupdate, productdelete} from '../services/product.service';
//The controllers to see the products in the database.
async function getById(req: Request, res: Response) {
    const id = req.params.id;
    const product : Product | null = await Product.findByPk(id);
    return res.json(product);
}
async function getAll(res: Response) {
  const allproducts: Product[] = await Product.findAll();                                                                                                                                                                         
  return res.json(allproducts);
}
//Call the controllers to create, update and delete the products in the database.
async function create(req: Request, res: Response) {
  await productcreate(req);
  getAll(res);
}
async function updateById(req: Request, res: Response) {
  await productupdate(req, res);
  getById(req, res);
}
async function deleteById(req: Request, res: Response) {
   await productdelete(req, res);
}

export { getById };
export { getAll };
export { create };
export { updateById };
export { deleteById };