import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.ts";

const productRoute: Router = Router();

// ===== Product Routes =====
productRoute.get("/", getProducts);
productRoute.post("/", createProduct);

export default productRoute;
