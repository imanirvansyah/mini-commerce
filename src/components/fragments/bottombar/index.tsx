import Link from "next/link"
import { MENUS } from "@/constants/menu"
import { mappedIcons } from "../sidebar"

const BottomBar = () => {
  return (
    <div className="flex justify-between items-center  p-4 bottom-0 w-full md:hidden fixed z-50 border-t bg-background">
      {MENUS.map((item) => (
        <Link href={item.url} key={item.title} className="flex flex-col items-center cursor-pointer  rounded-md">
          {mappedIcons[item.icon as keyof typeof mappedIcons]}
        </Link>
      ))}
    </div>
  )
}

export default BottomBar

export type NavItem = {
  name: string
  icon: string
  path: string
}

