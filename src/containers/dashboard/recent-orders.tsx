import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const RecentOrders = () => {
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
        <TableRow className="cursor-pointer">
          <TableCell className="">abc123</TableCell>
          <TableCell>
            <div className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
              <div className="w-10 h-10 bg-red-300 rounded-md" />
              <div>
                <p className="font-bold">Items name</p>
                <small className="text-muted-foreground italic">variant</small>
              </div>
              <p>2x</p>
            </div>
          </TableCell>
          <TableCell>John doe</TableCell>
          <TableCell>
            <Badge variant="destructive">
              Need to sent
            </Badge>
          </TableCell>
          <TableCell className="text-right">Rp500.000</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer">
          <TableCell className="">abc123</TableCell>
          <TableCell>
            <div className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
              <div className="w-10 h-10 bg-red-300 rounded-md" />
              <div>
                <p className="font-bold">Items name</p>
                <small className="text-muted-foreground italic">variant</small>
              </div>
              <p>2x</p>
            </div>
          </TableCell>
          <TableCell>John doe</TableCell>
          <TableCell>
            <Badge variant="secondary">
              On Progress
            </Badge>
          </TableCell>
          <TableCell className="text-right">Rp500.000</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer">
          <TableCell className="">abc123</TableCell>
          <TableCell>
            <div className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
              <div className="w-10 h-10 bg-red-300 rounded-md" />
              <div>
                <p className="font-bold">Items name</p>
                <small className="text-muted-foreground italic">variant</small>
              </div>
              <p>2x</p>
            </div>
          </TableCell>
          <TableCell>John doe</TableCell>
          <TableCell>
            <Badge variant="secondary">
              On Progress
            </Badge>
          </TableCell>
          <TableCell className="text-right">Rp500.000</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer">
          <TableCell className="">abc123</TableCell>
          <TableCell>
            <div className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
              <div className="w-10 h-10 bg-red-300 rounded-md" />
              <div>
                <p className="font-bold">Items name</p>
                <small className="text-muted-foreground italic">variant</small>
              </div>
              <p>2x</p>
            </div>
          </TableCell>
          <TableCell>John doe</TableCell>
          <TableCell>
            <Badge variant="secondary">
              On Progress
            </Badge>
          </TableCell>
          <TableCell className="text-right">Rp500.000</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer">
          <TableCell className="">abc123</TableCell>
          <TableCell>
            <div className="flex items-center justify-start gap-3 p-3 min-w-[200px]">
              <div className="w-10 h-10 bg-red-300 rounded-md" />
              <div>
                <p className="font-bold">Items name</p>
                <small className="text-muted-foreground italic">variant</small>
              </div>
              <p>2x</p>
            </div>
          </TableCell>
          <TableCell>John doe</TableCell>
          <TableCell>
            <Badge variant="secondary" className="bg-green-500 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-950 text-white">
              Finished
            </Badge>
          </TableCell>
          <TableCell className="text-right">Rp500.000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
