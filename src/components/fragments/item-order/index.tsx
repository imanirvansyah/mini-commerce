
import { Product } from "@/services/order/order.type";
import { ImageIcon } from "lucide-react";

export const ItemOrder = ({ data, id }: { data: Product[], id: string }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-14 h-14 bg-gray-200  flex items-center justify-center rounded-lg">
        <ImageIcon className="text-slate-500" />
      </div>
      <div>
        <h4 className="font-semibold">{data[0].name} {data.length > 1 && `(and ${data.length} others)`}</h4>
        <span className="text-muted-foreground text-xs mt-1">#{id}</span>
      </div>
    </div>
  )
}