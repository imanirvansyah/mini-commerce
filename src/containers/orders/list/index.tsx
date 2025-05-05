"use client"

import { ItemOrder } from "@/components/fragments/item-order";
import { TablePagination } from "@/components/fragments/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterIcon } from "lucide-react";
import { useOrders } from "./hooks/useOrder";
import LoadingOrder from "@/app/(features)/orders/loading";

const ListOrders = () => {
  const { data, page, search, handlePageChange, handleNextPage, handlePreviousPage, handleSearch } = useOrders();
  const { data: list, isLoading } = data;

  if (isLoading) return <LoadingOrder />;

  return (
    <div className="w-full h-full overflow-scroll">
      <div className="flex items-center justify-start gap-2 mb-3">
        <Input
          placeholder="Search order here..."
          className="w-fit"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button variant={"outline"} size={"icon"}><FilterIcon /></Button>
      </div>
      <Card >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Shipping Status</TableHead>
              <TableHead>Delivery Method</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list?.data.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="w-[400px] md:w-auto">
                    <ItemOrder data={item.product} id={item.id} />
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <div className="flex gap-3 items-center">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <p>{item.customerName}</p>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    Today, 03 May, 2025
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    Rp {item.totalPurchase}
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <Badge>{item.paymentStatus.label}</Badge>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <Badge>{item.shipping.status.label}</Badge>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <p>{item.shipping.name}</p>
                    <span className="text-muted-foreground text-xs mt-1">#{item.shipping.id}</span>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <Button>See Detail</Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <CardFooter className="mt-4">
          <TablePagination
            data={list?.meta}
            page={page}
            handlePageChange={handlePageChange}
            handleNextPage={() => handleNextPage(list?.meta.totalPage || 0)}
            handlePreviousPage={handlePreviousPage}
          />
        </CardFooter>
      </Card>
    </div>
  )
}


export default ListOrders;