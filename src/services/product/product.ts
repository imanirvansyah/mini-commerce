import api from "@/lib/axios";
import { TProduct } from "@/schemas/products";

export const getAllProducts = async (): Promise<TProduct[]> => {
  const res = await api.get("/products");
  return res.data;
}