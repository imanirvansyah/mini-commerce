import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/services/product/product';
import { useDebounce } from "@/hooks/use-debounce";

export const useProducts = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
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
    queryKey: ['products', { page, debouncedSearch }],
    queryFn: () => getAllProducts(),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    throwOnError: true
  })

  return {
    data,
    page,
    search,
    handleSearch: setSearch,
    handlePageChange,
    handlePreviousPage,
    handleNextPage
  }
}