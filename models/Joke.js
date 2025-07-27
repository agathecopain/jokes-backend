import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Joke = sequelize.define(
  "Joke",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(val) {
        this.setDataValue(
          "question",
          val.toLowerCase().trim().replace(/\s+/g, " ")
        );
      },
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(val) {
        this.setDataValue(
          "answer",
          val.toLowerCase().trim().replace(/\s+/g, " ")
        );
      },
    },
    image_url: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: true, underscored: true }
);

export default Joke;
