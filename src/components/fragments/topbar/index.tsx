'use client';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { generateBreadcrumbTitle } from "@/lib/breadcrumb";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegments } from 'next/navigation';
import { Breadcrumb } from "../breadcrumb";


const TopBar = () => {
  const segments = useSelectedLayoutSegments();
  const { setTheme, theme } = useTheme();
  return (
    <header className="flex items-center justify-between border-b p-4 fixed md:absolute md:rounded-t-xl w-full bg-background">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="hidden md:block" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4 hidden md:block" />
        <Breadcrumb title={generateBreadcrumbTitle(segments)} />
      </div>
      <div>
        <Button onClick={() => {
          setTheme(theme === "light" ? 'dark' : 'light')
        }}
          size="sm"
          variant={"ghost"}
        >
          {theme === "light" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )

}

export default TopBar