'use client';
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useSelectedLayoutSegments } from 'next/navigation';
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "../breadcrumb";
import { generateBreadcrumbTitle } from "@/lib/breadcrumb";


const TopBar = () => {
  const segments = useSelectedLayoutSegments();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark")
  }, [])
  return (
    <header className="flex items-center justify-between border-b p-4 fixed md:absolute md:rounded-t-xl w-full bg-background">
      <div className="flex items-center gap-3">

        <SidebarTrigger className="hidden md:block" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4 hidden md:block" />
        <Breadcrumb title={generateBreadcrumbTitle(segments)} />
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