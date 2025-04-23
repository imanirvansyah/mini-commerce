import * as React from "react"

import { cn } from "@/lib/utils"

interface inputProps extends React.ComponentProps<"input"> {
  suffix?: string;
  prefix?: string;
}
const Input = React.forwardRef<HTMLInputElement, inputProps>(
  ({ className, type, suffix, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      >
        {suffix && <span className="absolute right-2 top-1/2 transform -translate-y-1/2">{suffix}</span>}

      </input>
    )
  }
)
Input.displayName = "Input"

export { Input }
