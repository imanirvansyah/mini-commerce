import { getDashboard } from "@/services/dashboard/dashboard";
import { useQuery } from "@tanstack/react-query";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
}