import api from "@/lib/axios";
import { TProduct } from "@/schemas/products";

export const getAllProducts = async (): Promise<TProduct[]> => {
  const res = await api.get("/products");
  return res.data;
}
export const getProductById = async (id: string): Promise<TProduct> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
}
