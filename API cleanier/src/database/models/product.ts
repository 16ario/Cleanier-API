import { Model, DataTypes } from 'sequelize';
import sequelize from '../instance';
import {Category} from './category';

sequelize.authenticate();
//Create the product model.
export class Product extends Model {
  declare id: number;
  declare category: string;
  declare description: string;
  declare price: number;
  declare capacity: number;
  declare product_name: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    category: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    price: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    capacity: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    product_name: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: 'product',
    sequelize,
  },
);
Category.hasOne(Product, {foreignKey: 'category_id'})
