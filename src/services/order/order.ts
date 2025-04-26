import api from "@/lib/axios";
import { Order } from "./order.type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllOrders = async (): Promise<Order[]> => {
  const res = await api.get("/orders");
  return res.data;
}