import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/services/product';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(),
    staleTime: 10000,
    refetchOnWindowFocus: false,
  })
}