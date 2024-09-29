import express from "express";
import { registerUserController } from "../../controllers/registerUser/registerUser.controllers.js";
export const registerUser= express.Router();

registerUser.post('/register',registerUserController);
