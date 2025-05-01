import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getAllProducts } from '@/services/product/product';
import ProductList from "@/containers/products/list";
import LoadingProduct from './loading';
import { Suspense } from 'react';
import { ErrorBoundary } from '@/components/fragments/error-boundary';

export default async function Products() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getAllProducts
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingProduct />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}


