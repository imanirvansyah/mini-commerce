import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { MENUS } from "@/constants/menu"
import { ChartBarBig, HomeIcon, Package, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <SidebarComponent variant="inset">
      <SidebarHeader className="px-4">
        <h1 className="font-bold">Atmin Panel</h1>
      </SidebarHeader>
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
    </SidebarComponent>
  )
}

export const mappedIcons = {
  "home": <HomeIcon />,
  "package": <Package />,
  "shopping-cart": <ShoppingCart />,
  "users": <Users />,
  "chart-bar-big": <ChartBarBig />,
}