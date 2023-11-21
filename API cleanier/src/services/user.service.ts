import { User } from "../database/models/user";
import { Request, Response } from  'express';
//the controllers to create, update and delete in the user table.
async function usercreate(req: Request) {
    const Firstname = req.query.firstname;
    const Lastname = req.query.lastname;
    const Password = req.query.password;
    const E_mail = req.query.e_mail;
    const Phone_number = req.query.phone_number;
    const Delivery_address = req.query.delivery_address;
    const User_name = req.query.user_name;
    const Card_number = req.query.card_number;
     
    await User.create({
      firstname : Firstname, lastname: Lastname, password: Password, e_mail: E_mail, phone_number: Phone_number, delivery_address: Delivery_address, user_name: User_name, card_number: Card_number,
    });
 }
 async function userupdate(req: Request, res: Response) {
   const aaa = await User.findOne({where: {id: req.params.id}});
   if (aaa === null) {
     res.send('Not found');
   }
   else {
     await User.update({
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       password: req.body.password,
       e_mail: req.body.e_mail,
       phone_number: req.body.phone_number,
       delivery_address: req.body.delivery_address,
       user_name: req.body.user_name,
       card_number: req.body.card_number
     }, {where: {id: req.params.id}});
   }
 }
 async function userdelete(req: Request, res: Response) {
     const id = req.params.id;
     await User.destroy({ where: { id } });
     res.json()
}

export { usercreate };
export { userupdate };
export { userdelete };
