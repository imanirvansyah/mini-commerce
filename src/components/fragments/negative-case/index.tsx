import { Button } from "@/components/ui/button";
import { ILLUSTRATION } from "@/constants/illustration"
import { cn } from "@/lib/utils";
import Image from "next/image"
import { ClassNameValue } from "tailwind-merge";

export type NegativeCaseProps = {
  image?: string,
  title?: string,
  subtitle?: string,
  action?: () => void;
  actionLabel?: string;
  className?: ClassNameValue
}
const NegativeCase = ({
  image = ILLUSTRATION.SERVER_DOWN,
  title = "Ooops, What's this?",
  subtitle = "Take sip of your drinks and relax, we will get you back with speed of light",
  action,
  actionLabel = "Confirm",
  className
}: NegativeCaseProps) => {
  return (
    <div className={cn("w-full h-full p-5 flex flex-col gap-1 items-center justify-center text-center", className)}>
      <Image src={image} width={500} height={500} alt="Server down" />
      <h1 className="text-2xl font-bold mt-10">{title}</h1>
      <p className="text-muted-foreground">{subtitle}</p>
      {!!action && <Button className="mt-5 uppercase tracking-widest" onClick={action} size={"lg"}>{actionLabel}</Button>}
    </div>
  )
}

export default NegativeCase