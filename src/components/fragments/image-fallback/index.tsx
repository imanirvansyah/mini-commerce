import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const ImageFallback = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("h-full w-full aspect-square bg-gray-200 flex items-center justify-center rounded-md", className)}>
      <ImageIcon className="text-slate-500" />
    </div>
  )
}

export default ImageFallback