
import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "@/services/order/order";
import { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const useOrders = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
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
    queryKey: ["orders", { page, debouncedSearch }],
    queryFn: () => getAllOrders({
      page,
      search: debouncedSearch
    }),
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    search,
    handleSearch: setSearch,
    handlePageChange,
    handlePreviousPage,
    handleNextPage
  }
};