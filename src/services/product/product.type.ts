
import { TProduct } from "@/schemas/products";
export interface IAllProducts extends TProduct {
  id: number;
  orderCount: number
}