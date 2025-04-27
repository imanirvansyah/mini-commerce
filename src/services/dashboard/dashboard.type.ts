import { Order } from "../order/order.type";

export type Dashboard = {
  todayRevenue: number;
  todaysOrders: number;
  NeedToShip: number;
  onHoldOrders: number;
  chart: {
    revenue: RevenueChart[],
    products: ProductChart[]
  },
  orderList: Order[]
}


export type RevenueChart = {
  month: string;
  total: number;
}
export type ProductChart = {
  name: string;
  total: number;
}