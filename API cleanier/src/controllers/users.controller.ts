import { User } from "../database/models/user";
import { Request, Response } from  'express';
import { usercreate, userupdate, userdelete } from "../services/user.service";
import jwt from 'jsonwebtoken';
import accessTokenSecret from "../accesstoken";

//The controllers to see the users in the database.
async function getById(req: Request, res: Response) {
    const id = req.params.id;
    const user : User | null = await User.findByPk(id);
    return res.json(user);
}
async function getAll(res: Response) {
  const allusers: User[] = await User.findAll();                                                                                                                                       
  return res.json(allusers);
}
//Call the controllers to create, update and delete the users in the database.
async function register(req: Request, res: Response) {
  await usercreate(req);
  getAll(res);
}
async function updateById(req: Request, res: Response) {
  await userupdate(req, res);
  getById(req, res);
}
async function deleteById(req: Request, res: Response) {
  await userdelete(req, res);
}
async function login(req: Request, res: Response) {
  const { user_name, password } = req.body;
  const user = await User.findOne({where : { user_name: user_name, password: password }
  });
  if (user) {
   const accessToken = jwt.sign({user_name: user_name},accessTokenSecret, {expiresIn: '1day'});
   res.json({
    accessToken
 });
 } else{
  res.send('Error: Username or password incorrrect')
 }
}

export { getById };
export { getAll };
export { register };
export { updateById };
export { deleteById };
export {login};
