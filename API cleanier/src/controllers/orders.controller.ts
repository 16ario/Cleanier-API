import { Order } from "../database/models/order";
import { Request, Response } from  'express';
import { ordercreate, orderdelete, orderupdate } from "../services/order.service";
//The controllers to see the orders in the database.
async function getById(req: Request, res: Response) {
    const id = req.params.id;
    const order : Order | null = await Order.findByPk(id);
    return res.json(order);
}
async function getAll(res: Response) {
  const allorders: Order[] = await Order.findAll();                                                                                                                                        
  return res.json(allorders);
}
//Call the controllers to create, update and delete the orders in the database.
async function create(req: Request, res: Response) {
  await ordercreate(req)
  getAll(res)
}
async function updateById(req: Request, res: Response) {
  await orderupdate(req, res)
  getById(req, res)
}
async function deleteById(req: Request, res: Response) {
  await orderdelete(req, res)
}
export { getById };
export { getAll };
export { create };
export { updateById };
export { deleteById };