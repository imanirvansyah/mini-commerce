import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

type LoadingTableProps = {
  length?: number
}
const LoadingTable = ({ length = 10 }: LoadingTableProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-12 w-24" />
      </div>
      <Card>
        <Table>
          <TableBody>
            {Array.from({ length: length }, (_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex gap-2">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </TableCell>
                <TableCell> <Skeleton className="h-12 w-full" /></TableCell>
                <TableCell> <Skeleton className="h-12 w-full" /></TableCell>
                <TableCell> <Skeleton className="h-12 w-full" /></TableCell>
                <TableCell> <Skeleton className="h-12 w-full" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Card>
    </div>
  )
}
export default LoadingTable