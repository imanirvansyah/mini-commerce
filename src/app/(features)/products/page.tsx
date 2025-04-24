import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getAllProducts } from '@/services/product';
import ProductList from "@/containers/products/list";

export default async function Products() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getAllProducts
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductList />
    </HydrationBoundary>
  );
}


