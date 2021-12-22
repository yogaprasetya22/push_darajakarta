import { Sequelize } from "sequelize";

const db = new Sequelize("datajakarta", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
