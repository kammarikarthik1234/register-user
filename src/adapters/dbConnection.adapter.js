import mongoose from "mongoose";
import { logger } from "../logger/logger.js";
/**
 * Establishes a connection to the MongoDB database.
 *
 * @returns {Promise<void>} - A promise that resolves to successful connection.
 * @throws {Error} - Throws an error if the connection to the database fails.
 */
export const createDBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    logger.info("Connected to MongoDB");
  } catch (err) {
    logger.error(
      `Error while connecting to db:${JSON.stringify(err?.message)}`
    );
  }
};
