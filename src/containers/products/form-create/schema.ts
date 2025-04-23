import { z } from "zod";

export const sizeSchema = z.object({
  name: z.string().min(1, { message: "Size name is required" }),
});

export const variantSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, { message: "Variant name is required" }),
  qty: z.number().min(1, { message: "Variant stock is required" }),
});

export const productFormSchema = z.object({
  productName: z.string({
    required_error: "Product name is required",
    invalid_type_error: "Product name must be a string",
  }).min(1, { message: "Product name is required" }),
  productDescription: z.string({
    required_error: "Product description is required",
    invalid_type_error: "Product description must be a string",
  }).min(1, { message: "Product description is required" }),
  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }).min(1, { message: "Price is required" }),
  totalQty: z.number({
    required_error: "Total quantity is required",
    invalid_type_error: "Total quantity must be a number",
  }).min(1, { message: "Total quantity is required" }),
  isAllSize: z.boolean().default(false).optional(),
  isNoVariant: z.boolean().default(false).optional(),
  size: z.array(sizeSchema).optional(),
  variant: z.array(variantSchema).optional(),
  image: z.array(z.string()).optional(),
})

export type ProductFormValues = z.infer<typeof productFormSchema>;
export type Variant = z.infer<typeof variantSchema>;
export type Size = z.infer<typeof sizeSchema>;