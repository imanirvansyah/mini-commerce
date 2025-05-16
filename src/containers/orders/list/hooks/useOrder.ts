
import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "@/services/order/order";
import { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const useOrders = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<string>("all")
  const debouncedSearch = useDebounce(search, 500);


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  }
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const handleNextPage = (totalPage: number) => {
    if (page < (totalPage || 0)) {
      setPage(page + 1);
    }
  }


  const data = useQuery({
    queryKey: ["orders", { page, debouncedSearch, status }],
    queryFn: () => getAllOrders({
      page,
      search: debouncedSearch,
      status: status
    }),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    throwOnError: true
  });

  return {
    data,
    page,
    search,
    status,
    handleStatus: setStatus,
    handleSearch: setSearch,
    handlePageChange,
    handlePreviousPage,
    handleNextPage
  }
};