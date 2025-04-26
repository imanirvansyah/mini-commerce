import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IResponseMeta } from "@/services/type";

type TablePaginationProps = {
  data?: IResponseMeta;
  page?: number;
  handlePageChange: (newPage: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export function TablePagination({
  data,
  page,
  handlePageChange,
  handleNextPage,
  handlePreviousPage
}: TablePaginationProps) {
  return (
    <Pagination className="w-fit">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious onClick={handlePreviousPage} />
        </PaginationItem>
        {Array.from({ length: data?.totalPage || 0 }, (_, index) => (
          <PaginationItem className="cursor-pointer"
            key={index}
          >
            <PaginationLink isActive={page === index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="cursor-pointer">
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
