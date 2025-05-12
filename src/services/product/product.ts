import api from "@/lib/axios";
import { TProduct } from "@/schemas/products";
import { IResponse } from "../type";
import { IAllProducts } from "./product.type";



export const getAllProducts = async (): Promise<IResponse<IAllProducts[]>> => {
  const res = await api.get("/products");
  return res.data;
}
export const getProductById = async (id: string): Promise<TProduct> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postNewProduct = async (payload: any) => {
  const res = await api.post("/products", payload)
  return res
}