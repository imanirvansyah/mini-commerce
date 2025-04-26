"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterIcon } from "lucide-react";
import { useOrders } from "./hooks/useOrder";
import { Card } from "@/components/ui/card";
import { DialogDetailShipment } from "@/components/fragments/card-order";

const ListOrders = () => {
  const { data, search, handleSearch } = useOrders();
  const { data: list, isLoading, error } = data;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full h-full overflow-scroll mt-12">
      <div className="flex items-center justify-start gap-2 mb-3">
        <Input
          placeholder="Search order here..."
          className="w-fit"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button variant={"outline"} size={"icon"}><FilterIcon /></Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >ID</TableHead>
              <TableHead >Items</TableHead>
              <TableHead >Customer&apos;s Name</TableHead>
              <TableHead >Status</TableHead>
              <TableHead className="text-right">Total </TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list?.data?.map((order, index) => (
              <TableRow className="cursor-pointer" key={index}>
                <TableCell className="">{order.orderId}</TableCell>
                <TableCell>
                  {order?.items.map((item, index) => (
                    <div className="flex items-center justify-start gap-3 p-3 min-w-[200px] mb-1" key={index}>
                      <div className="w-10 h-10 bg-red-300 rounded-md" />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <small className="text-muted-foreground italic">{item.variant} ~ {item.qty}x</small>
                      </div>
                    </div>
                  ))}
                </TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>
                  <Badge variant="destructive">
                    {order.shippingStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">Rp{order.totalPrice}</TableCell>
                <TableCell className="text-right">
                  <DialogDetailShipment />
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </Card>
    </div>
  )
}


export default ListOrders