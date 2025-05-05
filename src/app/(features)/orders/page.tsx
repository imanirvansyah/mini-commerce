import { ErrorBoundary } from '@/components/fragments/error-boundary';
import ListOrders from "@/containers/orders/list";
import { getAllOrders } from "@/services/order/order";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Suspense } from 'react';
import LoadingTable from '@/components/fragments/loading-table';

export default async function Orders() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders({})
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingTable />}>
          <ListOrders />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  )
}


