import { ErrorBoundary } from '@/components/fragments/error-boundary';
import ProductDetail from "@/containers/products/detail";
import { getProductById } from "@/services/product/product";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import LoadingProduct from './loading';
import { Suspense } from 'react';
import { TPageProps } from '@/services/type';

export default async function Products({ params }: TPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products-by-id'],
    queryFn: () => getProductById(id)
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingProduct />}>
          <ProductDetail id={id} />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}


