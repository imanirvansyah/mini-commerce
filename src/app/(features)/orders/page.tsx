import { ErrorBoundary } from '@/components/fragments/error-boundary';
import ListOrders from "@/containers/orders/list";
import { getAllOrders } from "@/services/order/order";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Suspense } from 'react';
import LoadingOrder from "./loading";

export default async function Orders() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders({})
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingOrder />}>
          <ListOrders />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  )
}


