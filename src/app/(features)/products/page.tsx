import { ErrorBoundary } from '@/components/fragments/error-boundary';
import LoadingTable from '@/components/fragments/loading-table';
import ProductList from "@/containers/products/list";
import { getAllProducts } from '@/services/product/product';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function Products() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getAllProducts
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingTable />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}


