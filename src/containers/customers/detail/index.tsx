import { ItemOrder } from "@/components/fragments/item-order";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DetailCustomer = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <span className="text-xs italic">Customer id</span>
          <CardTitle>Customer name</CardTitle>
          <CardDescription>Customer@mail.com</CardDescription>
        </CardHeader>
      </Card>
      <hr className="my-4" />
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Purchase History</h1>
          <p className="text-muted-foreground italic">Rp1.000.000</p>
        </div>
        <p className="text-sm text-muted-foreground">Last Purchase: January 13, 2025</p>
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
            {LIST?.map((item, index) => {
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
    </div>
  )
}

export default DetailCustomer

const LIST = [
  {
    "id": "ord202505020001",
    "product": [
      {
        "name": "Product 4",
        "variant": "variant C",
        "qty": 2
      },
      {
        "name": "Product 5",
        "variant": "variant D",
        "qty": 1
      }
    ],
    "customerName": "Charlie Davis",
    "datePurchase": "03-05-2025",
    "totalPurchase": 708658,
    "paymentStatus": {
      "label": "Failed",
      "variant": "danger"
    },
    "shipping": {
      "id": "TRK202505020001",
      "name": "Fast Delivery",
      "status": {
        "label": "Shipping",
        "variant": "success"
      }
    }
  },
  {
    "id": "ord202505020001",
    "product": [
      {
        "name": "Product 4",
        "variant": "variant C",
        "qty": 2
      },
      {
        "name": "Product 5",
        "variant": "variant D",
        "qty": 1
      }
    ],
    "customerName": "Charlie Davis",
    "datePurchase": "03-05-2025",
    "totalPurchase": 708658,
    "paymentStatus": {
      "label": "Failed",
      "variant": "danger"
    },
    "shipping": {
      "id": "TRK202505020001",
      "name": "Fast Delivery",
      "status": {
        "label": "Shipping",
        "variant": "success"
      }
    }
  },
  {
    "id": "ord202505020001",
    "product": [
      {
        "name": "Product 4",
        "variant": "variant C",
        "qty": 2
      },
      {
        "name": "Product 5",
        "variant": "variant D",
        "qty": 1
      }
    ],
    "customerName": "Charlie Davis",
    "datePurchase": "03-05-2025",
    "totalPurchase": 708658,
    "paymentStatus": {
      "label": "Failed",
      "variant": "danger"
    },
    "shipping": {
      "id": "TRK202505020001",
      "name": "Fast Delivery",
      "status": {
        "label": "Shipping",
        "variant": "success"
      }
    }
  },
]