import api from "@/lib/axios";
import { CustomerList } from "./customer.type";
import { IResponse, IParamsBase } from "../type";

export const getAllCustomers = async (params: IParamsBase): Promise<IResponse<CustomerList[]>> => {
  const res = await api.get("/customers", { params });
  return res.data;
}