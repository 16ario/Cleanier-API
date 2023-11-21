import { Order } from "../database/models/order";
import { Request, Response } from  'express';
//the controllers to create, update and delete in the order table.
async function ordercreate(req: Request) {
    const Product_id = req.query.product_id;
    const Quantity = req.query.quantity;
    const Total_price = req.query.total_price;
    const Order_date = req.query.order_date;
    const Order_status = req.query.order_status;
    const Shipping_date = req.query.shipping_date;
    const User_id = req.query.user_id;
  
    await Order.create({
      product_id : Product_id, quantity : Quantity, total_price : Total_price, order_date : Order_date, order_status : Order_status, shipping_date : Shipping_date, user_id : User_id,
    });
  }
  async function orderupdate(req: Request, res: Response) {
    const aaa = await Order.findOne({where: {id: req.params.id}});
    if (aaa === null) {
      res.send('Not found');
    }
    else {
      await Order.update({
        product_id: req.query.product_id,
        quantity: req.query.quantity,
        total_price: req.query.total_price,
        order_date: req.query.order_date,
        order_status: req.query.order_status,
        shipping_date: req.query.shipping_date,
        user_id: req.query.user_id,
      }, {where: {id: req.params.id}});
    }
  }
  
  async function orderdelete(req: Request, res: Response) {
      const id = req.params.id;
      await Order.destroy({ where: { id } });
      res.json();
      
  }

export { ordercreate };
export { orderupdate };
export { orderdelete };
