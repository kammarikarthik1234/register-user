import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { routeHandler } from "./src/routes/index.js";
import { createDBConnection } from "./src/adapters/dbConnection.adapter.js";
import { logger } from "./src/logger/logger.js";
dotenv.config();

const { PORT, FRONTEND_URL } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routeHandler(app);
createDBConnection()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    logger.fatal("Unable to connect to mongoDB.");
  });

export default app;
