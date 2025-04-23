import { CardOrder } from "@/components/fragments/card-order"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FilterIcon } from "lucide-react"
const ListOrders = () => {
  return (
    <div className="w-full h-full overflow-scroll mt-12">
      <div className="flex items-center justify-start gap-2 mb-3">
        <Input placeholder="Search order here..." className="w-fit" />
        <Button>Search</Button>
        <Button variant={"outline"} size={"icon"}><FilterIcon /></Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
      </div>
    </div>
  )
}




export default ListOrders