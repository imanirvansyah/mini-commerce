import { ILLUSTRATION } from "@/constants/illustration"
import Image from "next/image"

const NegativeCase = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-1 items-center justify-center text-center">
      <Image src={ILLUSTRATION.SERVER_DOWN} width={500} height={500} alt="Server down" />
      <h1 className="text-2xl font-bold mt-10">Ooops, What&apos;s this?</h1>
      <p className="text-muted-foreground">Take sip of your drinks and relax, we will get you back with speed of light</p>
    </div>
  )
}

export default NegativeCase