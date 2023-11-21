import { Sequelize } from "sequelize";
import 'dotenv/config';
import process from 'process';
//Create the sequelize instance.
const sequelize = new Sequelize(
  process.env.mysql_db as string,
  process.env.mysql_user as string,
  process.env.mysql_password as string,

  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
export default sequelize;
async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established succesfully.')
  }   catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect();
