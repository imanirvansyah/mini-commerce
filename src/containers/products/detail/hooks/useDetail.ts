import { getProductById } from "@/services/product/product"
import { useQuery } from "@tanstack/react-query"

export const useDetail = (id: string) => {
  return useQuery({
    queryKey: ['products-by-id', id],
    queryFn: () => getProductById(id),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    throwOnError: true,
    retry: 1
  })
}