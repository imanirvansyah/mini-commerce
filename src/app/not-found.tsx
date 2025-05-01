"use client"
import NegativeCase from "@/components/fragments/negative-case"
import { ILLUSTRATION } from "@/constants/illustration"
import { ROUTES } from "@/constants/route"
import { useRouter } from "next/navigation"

const NotFoundPage = () => {
  const { push } = useRouter()
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <NegativeCase
        image={ILLUSTRATION.UNKNOWN_PAGE}
        title="Wait, Where are we?"
        subtitle="Lets get back to where we used to be"
        action={() => { push(ROUTES.DASHBOARD) }}
        actionLabel="Go to dashboard"
      />
    </div>
  )
}
export default NotFoundPage