import { Model, DataTypes } from 'sequelize';
import sequelize from '../instance';

sequelize.authenticate();

export class Category extends Model {
  declare id: number;
  declare name: number;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'category',
    sequelize,
  },
  );
