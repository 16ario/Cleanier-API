import { Category } from "../database/models/category";
import { Request, Response } from  'express';
import { categorycreate, categorydelete, categoryupdate } from "../services/category.service";

//The controllers to see the categories in the database.
async function getById(req: Request, res: Response) {
    const id = req.params.id;
    const category : Category | null = await Category.findByPk(id);
    return res.status(200).json(category);
}
async function getAll(res: Response) {
  const allcategorys: Category[] = await Category.findAll();                                                                                                                                                                         
  return res.json(allcategorys);
}
//Call the controllers to create, update and delete the categories in the database.
async function create(req: Request, res: Response) {
  await categorycreate(req);
  getAll(res);
}
async function updateById(req: Request, res: Response) {
  await categoryupdate(req, res);
  getById(req, res);
}
async function deleteById(req: Request, res: Response) {
  await categorydelete(req, res);
}
export { getById };
export { getAll };
export { create };
export { updateById };
export { deleteById };