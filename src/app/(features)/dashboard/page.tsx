import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getDashboard } from "@/services/dashboard/dashboard";
import { Suspense } from "react";
import LoadingPage from "./loading";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/components/fragments/error-boundary";

const Dashboard = dynamic(() => import("@/containers/dashboard"), { ssr: false, suspense: true })

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
      <ErrorBoundary>
        <Suspense fallback={<LoadingPage />}>
          <Dashboard />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}


