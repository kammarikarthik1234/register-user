import { registerUser } from "./registerUser/registerUser.routes.js";

export const routeHandler = (app)=>{
    app.use(registerUser);
}