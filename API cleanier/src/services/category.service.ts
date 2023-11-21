import { Category } from "../database/models/category";
import { Request, Response } from  'express';

async function categorycreate(req: Request) {
    const Name = req.query.name;
  
    await Category.create({
      name : Name,
    });
  }
  async function categoryupdate(req: Request, res: Response) {
    const aaa = await Category.findOne({where: {id: req.params.id}});
    if (aaa === null) {
      res.send('Not found');
    }
    else {
      await Category.update({
        name: req.query.name,
      }, {where: {id: req.params.id}});
    }
  }
  
  async function categorydelete(req: Request, res: Response) {
      const id = req.params.id;
      await Category.destroy({ where: { id } });
      res.json();
  }
  export { categorycreate };
  export { categoryupdate };
  export { categorydelete };
  