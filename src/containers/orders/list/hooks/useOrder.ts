
import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "@/services/order/order";

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders(),
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
};