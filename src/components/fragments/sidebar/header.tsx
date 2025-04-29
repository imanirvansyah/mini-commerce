import {
  SidebarHeader as SidebarHeaderPrimitive,
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar"

export const SidebarHeader = () => {
  return (
    <SidebarHeaderPrimitive className=" py-4">
      <SidebarMenu>
        <SidebarMenuItem className="flex gap-3 items-center">
          <div className="bg-primary p-3 rounded-md w-fit">
            <span className=" font-bold">MC</span>
          </div>
          <div className="">
            <h1 className="font-bold">Minicommerce</h1>
            <span className="text-sm text-muted-foreground italic">Admin panel</span>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeaderPrimitive>
  )
}