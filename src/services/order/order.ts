import api from "@/lib/axios";
import { Order } from "./order.type";
import { IResponse, IParamsBase } from "../type";

interface IParamsOrders extends IParamsBase {
  status: string
}
export const getAllOrders = async (params: IParamsOrders): Promise<IResponse<Order[]>> => {
  const res = await api.get("/orders", { params });
  return res.data;
}