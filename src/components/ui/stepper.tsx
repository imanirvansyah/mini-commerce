import { Separator } from "./separator"

const StepperContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between w-full gap-3 ">
      {children}
    </div>
  )
}

const StepperItem = ({ label, children }: { label: string, children?: React.ReactNode }) => {
  return (
    <div className="text-center flex flex-col items-center w-fit">
      <div className="w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center">
        {children}
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  )
}

const StepperSeparator = () => {
  return (
    <Separator className="flex-1 mb-3 " />
  )
}

export {
  StepperContainer,
  StepperItem,
  StepperSeparator
}