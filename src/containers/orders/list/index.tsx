"use client"

import ImageFallback from "@/components/fragments/image-fallback";
import { ItemOrder } from "@/components/fragments/item-order";
import LoadingTable from "@/components/fragments/loading-table";
import { TablePagination } from "@/components/fragments/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { StepperContainer, StepperItem, StepperSeparator } from "@/components/ui/stepper";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Order } from "@/services/order/order.type";
import { toIDR } from "@/utils/number";
import { BanIcon, CheckIcon, PickaxeIcon, TruckIcon } from "lucide-react";
import { useOrders } from "./hooks/useOrder";

const ListOrders = () => {
  const { data, page, search, status, handlePageChange, handleNextPage, handlePreviousPage, handleSearch, handleStatus } = useOrders();
  const { data: list, isLoading } = data;
  if (isLoading) return <LoadingTable />;

  return (
    <div className="w-full h-full overflow-scroll">
      <div className="flex items-center justify-start gap-2 mb-3">
        <Input
          placeholder="Search order here..."
          className="w-fit"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {/* <Button variant={"outline"} size={"icon"}><FilterIcon /></Button> */}
      </div>
      <Tabs defaultValue={status} onValueChange={(v) => handleStatus(v)}>
        <TabsList className="grid md:w-1/2 grid-cols-5 mb-3">
          <TabsTrigger className="text-xs md:text-md" value="all">All</TabsTrigger>
          <TabsTrigger className="text-xs md:text-md" value="processing">Processing</TabsTrigger>
          <TabsTrigger className="text-xs md:text-md" value="shipping">Shipping</TabsTrigger>
          <TabsTrigger className="text-xs md:text-md" value="finished">Finished</TabsTrigger>
          <TabsTrigger className="text-xs md:text-md" value="cancel">Canceled</TabsTrigger>
        </TabsList>
      </Tabs>
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
                    {toIDR(item.totalPurchase)}
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <Badge color={item.paymentStatus.variant}>{item.paymentStatus.label}</Badge>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <Badge variant="default" color={item.shipping.status.variant}>{item.shipping.status.label}</Badge>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <p>{item.shipping.name}</p>
                    <span className="text-muted-foreground text-xs mt-1">#{item.shipping.id}</span>
                  </TableCell>
                  <TableCell className="w-[150px] md:w-auto">
                    <DialogDetail data={item} />
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

const DialogDetail: React.FC<{ data: Order }> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary text-primary-foreground p-3 rounded-md hover:bg-primary/90">
        See Detail
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Detail Order #{data.id}
          </DialogTitle>
          <div className="overflow-auto w-full py-5">
            <Card className="p-3">
              <div className="flex items-center justify-between mb-5">
                <CardDescription>{data.shipping.name}</CardDescription>
                <CardDescription className="pb-1">#{data.shipping.id} </CardDescription>
              </div>
              <StepperContainer>
                <StepperItem label="Processing">
                  <PickaxeIcon />
                </StepperItem>
                <StepperSeparator />
                <StepperItem label="Shipping">
                  <TruckIcon />
                </StepperItem>
                <StepperSeparator />
                <StepperItem label="Finished">
                  <CheckIcon />
                </StepperItem>
                <StepperSeparator />
                <StepperItem label="Canceled">
                  <BanIcon className="rotate-90" />
                </StepperItem>
              </StepperContainer>
            </Card>
          </div>
          {data.product.map((item) => (
            <div className="flex items-center justify-between gap-3" key={item.name}>
              <div className="flex gap-3 items-center">
                <ImageFallback className="w-12" />
                <div>
                  <p className="text-xs font-bold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.variant} ~ {item.qty}</p>
                </div>

              </div>
              <p className="text-xs">{toIDR(item.price)}</p>
            </div>
          ))}
        </DialogHeader>
        <DialogFooter>
          <Button>Print Receipt</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default ListOrders;