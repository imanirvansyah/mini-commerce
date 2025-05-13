import ImageFallback from "@/components/fragments/image-fallback";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Order } from "@/services/order/order.type";
import { toIDR } from "@/utils/number";

const RecentOrders = ({ data }: { data: Order[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >ID</TableHead>
          <TableHead >Items</TableHead>
          <TableHead >Customer&apos;s Name</TableHead>
          <TableHead >Status</TableHead>
          <TableHead className="text-right">Total </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((order, index) => (
          <TableRow key={index}>
            <TableCell className="">{order.id}</TableCell>
            <TableCell>
              {order.product.map((item, index) => (
                <div key={index} className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
                  <ImageFallback className="w-10 h-10" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <small className="text-muted-foreground italic">{item.variant} ~ {item.qty}x</small>
                  </div>
                </div>
              ))}
            </TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>
              <Badge variant={order.shipping.status.variant}>
                {order.shipping.status.label}
              </Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">{toIDR(order.totalPurchase)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default RecentOrders