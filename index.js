import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { routeHandler } from "./src/routes/index.js";
import { createDBConnection } from "./src/adapters/dbConnection.adapter.js";
import { logger } from "./src/logger/logger.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const { PORT } = process.env;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
routeHandler(app);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
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
