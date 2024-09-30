import { ROUTES } from "../constants/response.constants.js";
import { registerUser } from "./registerUser/registerUser.routes.js";
export const routeHandler = (app) => {
  app.use(ROUTES.API, registerUser);
};
