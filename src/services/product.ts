import * as ProductRepo from "../repositories/product.ts";
import { ProductSchema, type ProductInput } from "../schemas/product.ts";

export const fetchAllProducts = async () => {
  return await ProductRepo.getAllProducts();
};

export const createNewProduct = async (data: unknown) => {
  // validatedData will now be of type ProductInput
  const validatedData = ProductSchema.parse(data);

  // Now this will match the Repository's expectations
  return await ProductRepo.createProduct(validatedData);
};
