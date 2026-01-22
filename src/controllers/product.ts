import type { Request, Response, NextFunction } from "express";
import * as ProductService from "../services/product.ts";

// Utility to catch async errors and pass them to global handler
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await ProductService.fetchAllProducts();
  res.json(products);
});

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await ProductService.createNewProduct(req.body);
    res.status(201).json(product);
  },
);
