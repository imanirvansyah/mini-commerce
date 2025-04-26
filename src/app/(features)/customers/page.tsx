import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ListCustomers from "@/containers/customers/list";
import { getAllCustomers } from "@/services/customer/customer";

export default async function Customers() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["customers"],
    queryFn: () => getAllCustomers({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ListCustomers />
    </HydrationBoundary>

  );
}


