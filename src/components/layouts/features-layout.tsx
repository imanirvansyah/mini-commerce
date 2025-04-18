
import Sidebar from "@/components/fragments/sidebar";
import TopBar from "@/components/fragments/topbar";
import BottomBar from "@/components/fragments/bottombar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <SidebarInset>
        <TopBar />
        <main className="p-4 w-full my-12">
          {children}
        </main>
      </SidebarInset>
      <BottomBar />
    </>
  )
}