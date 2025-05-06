"use client"

import LoadingTable from "@/components/fragments/loading-table";
import { TablePagination } from "@/components/fragments/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterIcon } from "lucide-react";
import Link from "next/link";
import { useCustomer } from "./hooks/useCustomer";

const ListCustomers = () => {
  const { data, page, search, handleSearch, handlePageChange, handleNextPage, handlePreviousPage } = useCustomer();
  const { data: list, isLoading } = data
  if (isLoading) return <LoadingTable />;

  return (
    <div className="w-full h-full overflow-scroll">
      <div className="flex items-center justify-start gap-2 mb-3">
        <Input
          placeholder="Search customer here..."
          className="w-fit"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button variant={"outline"} size={"icon"}><FilterIcon /></Button>
      </div>
      <Card>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Purchased</TableHead>
              <TableHead>Last Purchase</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list?.data.map((customer, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex gap-3 items-center">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p>{customer.name}</p>
                  </div>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>Rp{customer.totalPurchase}</TableCell>
                <TableCell>{customer.lastPurchaseDate}</TableCell>
                <TableCell>
                  <Link href={`/customers/${customer.id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex my-4">
          <TablePagination
            data={list?.meta}
            page={page}
            handlePageChange={handlePageChange}
            handleNextPage={() => handleNextPage(list?.meta.totalPage || 0)}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      </Card>
    </div>
  );
}

export default ListCustomers;