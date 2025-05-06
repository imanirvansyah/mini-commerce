import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingProduct = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="hidden md:w-20 h-full md:flex md:flex-col gap-3">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-16" />
      </div>
      <div className="flex-1 max-w-[500px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex-1">
        <Card className="w-full h-full">
          <CardHeader>
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-48 h-8" />
          </CardHeader>
          <CardContent>
            <Skeleton className="w-full h-32 mb-3" />
            <Skeleton className="w-full h-32 mb-3" />
            <Skeleton className="w-full h-32 mb-3" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default LoadingProduct