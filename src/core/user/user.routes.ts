import { Router } from "express";
import passport from "passport";
import logIn from "./user.controller";
const userRoutes = Router();

userRoutes.route("/login").post(passport.authenticate("log_in"), logIn);

export default userRoutes;
