import { DataTypes } from "sequelize";
import sequelize from "../instance";

const Order = sequelize.define('Order', { name: DataTypes.STRING });
const Product = sequelize.define('product', { name: DataTypes.STRING });
const order_has_product = sequelize.define('order_has_product', {
  OrderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order, 
      key: 'id'
    }
  },
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product, 
      key: 'id'
    }
  }
});
Order.belongsToMany(Product, { through: order_has_product });
Product.belongsToMany(Order, { through: order_has_product });