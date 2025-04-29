import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { MENUS } from "@/constants/menu"
import { ChartBarBig, HomeIcon, Package, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { SidebarFooter } from "./footer"
import { SidebarHeader } from "./header"


export default function Sidebar() {
  return (
    <SidebarComponent variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENUS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {mappedIcons[item.icon as keyof typeof mappedIcons]}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter />
    </SidebarComponent >
  )
}

export const mappedIcons = {
  "home": <HomeIcon />,
  "package": <Package />,
  "shopping-cart": <ShoppingCart />,
  "users": <Users />,
  "chart-bar-big": <ChartBarBig />,
}