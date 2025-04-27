import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Dashboard from "@/containers/dashboard";
import { getDashboard } from "@/services/dashboard/dashboard";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard
  })
  return (
    <HydrationBoundary
      state={dehydrate(queryClient)}
    >
      <Dashboard />
    </HydrationBoundary>
  );
}


