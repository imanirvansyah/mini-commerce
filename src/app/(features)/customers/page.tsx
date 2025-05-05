import { ErrorBoundary } from '@/components/fragments/error-boundary';
import LoadingTable from '@/components/fragments/loading-table';
import ListCustomers from "@/containers/customers/list";
import { getAllCustomers } from "@/services/customer/customer";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Suspense } from 'react';

export default async function Customers() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["customers"],
    queryFn: () => getAllCustomers({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingTable />}>
          <ListCustomers />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>

  );
}


