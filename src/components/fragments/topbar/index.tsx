'use client';
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useSelectedLayoutSegments } from 'next/navigation';
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const titleMap: Record<string, string> = {
  dashboard: 'Dashboard',
  products: 'Products',
  orders: 'Orders',
  customers: 'Customers',
  analytics: 'Analytics',
  setting: 'Settings',
};

const TopBar = () => {
  const segments = useSelectedLayoutSegments();
  const segment = segments[0]; // top-level route segment
  const title = titleMap[segment] || 'Welcome';
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between border-b p-4 fixed md:absolute w-full bg-background">
      <div className="flex items-center gap-3">

        <SidebarTrigger className="hidden md:block" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4 hidden md:block" />
        <h1 className="font-bold">{title}</h1>
      </div>
      <div>
        <Button onClick={() => {
          setIsDarkMode(!isDarkMode)
          setTheme(isDarkMode ? 'dark' : 'light')
        }}
          size="sm"
          variant={"ghost"}
        >
          {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )

}

export default TopBar