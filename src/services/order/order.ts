import api from "@/lib/axios";
import { Order } from "./order.type";
import { IResponse, IParamsBase } from "../type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllOrders = async (params: IParamsBase): Promise<IResponse<Order[]>> => {
  const res = await api.get("/orders", { params });
  return res.data;
}