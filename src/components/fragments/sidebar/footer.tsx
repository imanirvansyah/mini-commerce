import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  SidebarFooter as SidebarFooterPrimitive,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { MENUS_FOOTER } from "@/constants/menu"
import { BellIcon, CreditCardIcon, LogOutIcon, MoreVerticalIcon, UserCircleIcon } from "lucide-react"
import Link from "next/link"

export const SidebarFooter = () => {
  return (
    <SidebarFooterPrimitive>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <UserNav />
                <MoreVerticalIcon className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-background p-3"
              side="right"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <UserNav />
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {MENUS_FOOTER.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <DropdownMenuItem>
                      {mappedIcons[item.icon as keyof typeof mappedIcons]}
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuGroup>
              {MENUS_FOOTER.length > 0 && <DropdownMenuSeparator />}
              <DropdownMenuItem>
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooterPrimitive>
  )
}

export const UserNav = () => {
  return <>
    <Avatar className="h-8 w-8 rounded-lg grayscale">
      {/* <AvatarImage src="/avatar.png" alt="avatar-png" /> */}
      <AvatarFallback className="rounded-lg">JD</AvatarFallback>
    </Avatar>
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">John Doe</span>
      <span className="truncate text-xs text-muted-foreground">
        johndoe@mail.com
      </span>
    </div>
  </>
}

export const mappedIcons = {
  account: <UserCircleIcon />,
  billing: <CreditCardIcon />,
  notification: <BellIcon />
}

