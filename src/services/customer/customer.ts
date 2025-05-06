import api from "@/lib/axios";
import { Order } from "../order/order.type";
import { IParamsBase, IResponse } from "../type";
import { TCustomer } from "./customer.type";

export const getAllCustomers = async (params: IParamsBase): Promise<IResponse<TCustomer[]>> => {
  const res = await api.get("/customers", { params });
  return res.data;
}

export const getCustomerById = async (id: string): Promise<TCustomer> => {
  const res = await api.get(`/customers/${id}`);
  return res.data;
}

export const getCustomerOrdersById = async (id: string): Promise<IResponse<Order[]>> => {
  const res = await api.get(`/customers/${id}/orders`);
  return res.data;
}
