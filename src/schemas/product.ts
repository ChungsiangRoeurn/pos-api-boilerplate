import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(2),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
  tags: z.string(),
  description: z.string().default(""),
});

// This is the magic line:
export type ProductInput = z.infer<typeof ProductSchema>;
