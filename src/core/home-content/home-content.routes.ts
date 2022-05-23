import { Router } from "express";
import { userAuthentication } from "../../middlewares/passport/user.authentication";
import {
  getAllHomeTopContent,
  postHomeTopContent,
} from "./home-content.controller";

const routes = Router();

routes.route("/home-top").get(userAuthentication,getAllHomeTopContent).post(userAuthentication,postHomeTopContent);
 
export default routes;
