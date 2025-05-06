import LoadingTable from "@/components/fragments/loading-table";
import { Card, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingCustomer = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Skeleton className="w-32 h-2" />
          <Skeleton className="w-32 h-8" />
          <Skeleton className="w-48 h-4" />
        </CardHeader>
      </Card>
      <div className="mt-6">
        <LoadingTable />
      </div>
    </div>
  )
}

export default LoadingCustomer;