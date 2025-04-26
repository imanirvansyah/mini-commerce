import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ListOrders from "@/containers/orders/list";
import { getAllOrders } from "@/services/order/order";

export default async function Orders() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders({})
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ListOrders />
    </HydrationBoundary>
  )
}


