import { ErrorBoundary } from "@/components/fragments/error-boundary";
import DetailCustomer from "@/containers/customers/detail";
import { getCustomerById, getCustomerOrdersById } from "@/services/customer/customer";
import { TPageProps } from "@/services/type";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from "react";
import LoadingCustomer from "./loading";

export default async function Customers({ params }: TPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['customer-by-id'],
    queryFn: () => getCustomerById(id)
  });

  await queryClient.prefetchQuery({
    queryKey: ['customer-orders-by-id'],
    queryFn: () => getCustomerOrdersById(id)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingCustomer />}>
          <DetailCustomer id={id} />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}