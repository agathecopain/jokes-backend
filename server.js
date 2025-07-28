import sqlite3 from "sqlite3";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import jokeRoutes from "./routes/joke.routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL;

app.use(express.json());
app.use(cors());

app.use("/api", jokeRoutes);

//config swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API blagues carambar",
      version: "1.0.0",
      description: "API REST pour consulter et ajouter des blagues Carambar.",
    },
    servers: [
      {
        url: `${clientUrl}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

connectDB();

app.listen(port, () => {
  console.log(`le serveur tourne sur http://localhost:${port}`);
});
