import { Model, DataTypes } from 'sequelize';
import sequelize from '../instance';

sequelize.authenticate();
//Create the user model.
export class User extends Model {
  declare id: number;
  declare firstname: string;
  declare lastname: string;
  declare password: string;
  declare e_mail: string;
  declare delivery_address: string;
  declare phone_number: string;
  declare user_name: string;
  declare card_number: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    e_mail: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    delivery_address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    phone_number: {
      type: new DataTypes.STRING(10),
      allowNull: false,
    },
    user_name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    card_number: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'user',
    sequelize,
  });
