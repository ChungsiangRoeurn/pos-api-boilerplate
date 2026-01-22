import { Router } from "express";
import productRoute from "./product.ts";

const rootRouter: Router = Router();

rootRouter.use("/product", productRoute);

export default rootRouter;
