import { prismaClient } from "../index.ts";
import type { ProductInput } from "../schemas/product.ts";

export const getAllProducts = async () => {
  return await prismaClient.product.findMany();
};

export const createProduct = async (data: ProductInput) => {
  return await prismaClient.product.create({
    data,
  });
};
