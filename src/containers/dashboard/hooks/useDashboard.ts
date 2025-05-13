import { getDashboard } from "@/services/dashboard/dashboard";
import { useQuery } from "@tanstack/react-query";

export const useDashboard = () => {

  const { data, isPending } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
    select: (data) => {
      const revenueChart = data.data.chart?.revenue?.map(item => ({
        name: item.month,
        value: item.total,
      })) ?? [];

      const productChart = data.data.chart?.products?.map(item => ({
        name: item.name,
        value: item.total,
      })) ?? [];

      return {
        todayRevenue: data.data.todayRevenue,
        todaysOrders: data.data.todaysOrders,
        NeedToShip: data.data.NeedToShip,
        onHoldOrders: data.data.onHoldOrders,
        revenueChart,
        productChart,
        orderList: data.data.orderList,
      };
    },
  });

  return {
    ...data,
    isPending
  }
}