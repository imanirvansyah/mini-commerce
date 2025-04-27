import api from "@/lib/axios";
import { Dashboard } from "./dashboard.type";
import { IResponse } from "../type";

export const getDashboard = async (): Promise<IResponse<Dashboard>> => {
  const res = await api.get("/dashboard");
  return res.data;
}