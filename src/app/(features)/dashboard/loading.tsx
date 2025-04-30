import { Skeleton } from "@/components/ui/skeleton"
const LoadingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 w-full h-[80vh] ">
      <Skeleton className="w-full h-full rounded-xl md:col-span-3" />
      <Skeleton className="w-full h-full rounded-xl md:col-span-3" />
      <Skeleton className="w-full h-full rounded-xl md:col-span-3" />
      <Skeleton className="w-full h-full rounded-xl md:col-span-3" />
      <Skeleton className="w-full h-full rounded-xl md:col-span-6" />
      <Skeleton className="w-full h-full rounded-xl md:col-span-6" />
      <Skeleton className="w-full h-full rounded-xl md:col-span-12" />
    </div>
  )
}

export default LoadingPage