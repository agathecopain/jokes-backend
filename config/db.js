import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./carambar_jokes.sqlite",
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connecté à la database");
    await sequelize.sync();
  } catch (error) {
    console.error("Echec lors de la connexion à la database : ", error);
  }
};

