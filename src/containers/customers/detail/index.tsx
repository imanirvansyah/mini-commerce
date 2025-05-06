"use client"

import { ItemOrder } from "@/components/fragments/item-order";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDetail } from "./hooks/useDetail";
import LoadingTable from "@/components/fragments/loading-table";

const DetailCustomer = ({ id }: { id: string }) => {
  const { detail, orders } = useDetail(id);
  const { data: dataDetail, isLoading: isLoadingDetail } = detail;
  const { data: dataOrders, isLoading: isLoadingOrders } = orders;

  if (isLoadingDetail && isLoadingOrders) return (
    <div>
      <Card>
        <CardHeader>
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-32 h-8" />
          <Skeleton className="w-48 h-4" />
        </CardHeader>
      </Card>
      <hr className="my-4" />
      <LoadingTable />
    </div>
  )

  return (
    <div>
      <Card>
        <CardHeader>
          <Badge className="text-xs italic w-fit">{dataDetail?.id}</Badge>
          <CardTitle>{dataDetail?.name}</CardTitle>
          <CardDescription>{dataDetail?.email}</CardDescription>
        </CardHeader>
      </Card>
      <hr className="my-4" />
      {!isLoadingOrders && (
        <>
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Purchase History</h1>
              <p className="text-muted-foreground italic">Rp{dataDetail?.totalPurchase}</p>
            </div>
            <p className="text-sm text-muted-foreground">Last Purchase: {dataDetail?.lastPurchaseDate}</p>
          </div>
          <Card className="mt-6">
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
                {dataOrders?.data?.map((item, index) => {
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
                        03 May, 2025
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
          </Card>
        </>
      )}
    </div>
  )
}

export default DetailCustomer

