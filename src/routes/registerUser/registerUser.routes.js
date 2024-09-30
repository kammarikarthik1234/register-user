import express from "express";
import { registerUserController } from "../../controllers/registerUser/registerUser.controllers.js";
import { ROUTES } from "../../constants/response.constants.js";
export const registerUser = express.Router();

registerUser.post(ROUTES.REGISTER_USER, registerUserController);
