import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"

export default function DashboardPage() {

  //add my code 
  const totalProjects = data.length
  const cloudProjects = data.filter(p => p.category === "Cloud ").length
  const cyberSecurityProjects = data.filter(p => p.category === "Cybersecurity").length

  const stats = {
    total: totalProjects,
    cloud: cloudProjects,
    cybersecurity:cyberSecurityProjects,
  }
  return (
    <>
      <SidebarInset>
  <SiteHeader />
  <div className="flex flex-1 flex-col text-center">
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards stats={stats}/>
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </div>
  </div>
</SidebarInset>
    </>
  )
}

{/* <SidebarProvider>
<AppSidebar variant="inset" />
<SidebarInset>
  <SiteHeader />
  <div className="flex flex-1 flex-col">
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          hh<ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </div>
  </div>
</SidebarInset>
</SidebarProvider> */}
