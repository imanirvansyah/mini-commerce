import { getCustomerById, getCustomerOrdersById } from "@/services/customer/customer";
import { useQuery } from "@tanstack/react-query"

export const useDetail = (id: string) => {
  const detail = useQuery({
    queryKey: ['customer-by-id', id],
    queryFn: () => getCustomerById(id),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    throwOnError: true,
    retry: 1
  })

  const orders = useQuery({
    queryKey: ['customer-orders-by-id', id],
    queryFn: () => getCustomerOrdersById(id),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    throwOnError: true,
    retry: 1
  })

  return {
    detail,
    orders
  }
}