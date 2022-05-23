import { Request, Response, Router } from "express";
import homeRoutes from "../core/home-content/home-content.routes";
import userRoutes from "../core/user/user.routes";

const indexRouter = Router();
indexRouter.use("/api/home-content", homeRoutes);
indexRouter.use("/api/user", userRoutes)

indexRouter.use("*",(req:Request, res:Response)=>{
    res.status(404).send("page not found")
})

export default indexRouter;
