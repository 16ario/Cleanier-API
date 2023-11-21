import { Model, DataTypes } from 'sequelize';
import sequelize from '../instance';
import { Product } from './product';
import { User } from './user';

sequelize.authenticate();
//Create the order model.
 export class Order extends Model {
  declare id: number;
  declare product_id: number;
  declare quantity: number;
  declare total_price: number;
  declare order_date: string;
  declare order_status: string;
  declare shipping_date: string;
  declare user_id: number;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    total_price: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    order_date: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    order_status: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    shipping_date: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'our_orders',
    sequelize,
  },
  );
   Order.hasMany(User, {foreignKey: 'user_id'});
  Order.belongsToMany(Product, {through: 'order_has_product'})
