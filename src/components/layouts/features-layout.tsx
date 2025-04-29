
import BottomBar from "@/components/fragments/bottombar";
import Sidebar from "@/components/fragments/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import('@/components/fragments/topbar'), { ssr: false });

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <SidebarInset>
        <TopBar />
        <main className="p-4 w-full my-12 pt-12">
          {children}
        </main>
      </SidebarInset>
      <BottomBar />
    </>
  )
}