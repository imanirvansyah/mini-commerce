import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/services/order/order.type";

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
          <TableRow key={index} className="cursor-pointer">
            <TableCell className="">{order.orderId}</TableCell>
            <TableCell>
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
                  <div className="w-10 h-10 bg-slate-200 rounded-md" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <small className="text-muted-foreground italic">{item.variant} ~ {item.qty}x</small>
                  </div>
                </div>
              ))}
            </TableCell>
            <TableCell>{order.name}</TableCell>
            <TableCell>
              <Badge >
                {order.shippingStatus}
              </Badge>
            </TableCell>
            <TableCell className="text-right">Rp{order.totalPrice}</TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  )
}

export default RecentOrders