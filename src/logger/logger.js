/* eslint-disable no-underscore-dangle */
import path from "path";
import winston from "winston";
import fs from "fs";
import { fileURLToPath } from "url";

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const logger = winston.createLogger({
  format: logFormat,
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL || "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        logFormat
      ),
    }),
  ],
});

export { logger };
