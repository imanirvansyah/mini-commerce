"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export const CardOrder = () => {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Customer name</CardTitle>
        <CardDescription>ORD190283018230</CardDescription>
        <Badge className="absolute top-5 right-5" >shipping status</Badge>
      </CardHeader>
      <CardContent className="flex gap-3 items-center justify-between">
        <div>
          <div className="w-16 h-16 bg-slate-200 rounded-md inline-block" />
          <div className="inline-block ml-4">
            <p className="font-semibold">Items name</p>
            <p className="italic">variant</p>
            <p className="text-muted-foreground text-sm">2x</p>
          </div>
        </div>
        <p>RP 100.000</p>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="flex-col items-end justify-between">
        <h1 className="text-lg font-semibold">Total: Rp200.000</h1>
        <div className="flex gap-3 mt-3">
          <DialogDetailShipment />
        </div>
      </CardFooter>
    </Card>
  )
}

export const DialogDetailShipment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="default">See detail shipment</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">Detail Shipment</h1>
          <div className="flex gap-3 items-center justify-between">
            <p>Order ID</p>
            <p>ORD190283018230</p>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <p>Shipping Address</p>
            <p>Jalan Raya No. 123, Jakarta</p>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <p>Shipping Method</p>
            <p>JNE Express</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}