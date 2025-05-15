"use client"

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        throwOnError: true,
      },
    },
  })
  return (
    <ThemeProvider
      attribute="class"
    >
      <SidebarProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default Providers;