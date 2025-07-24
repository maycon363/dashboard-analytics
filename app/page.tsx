'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar" // ← agora é mobile-only com portal
import CardStat from "@/components/CardStat"
import { Users, DollarSign, Eye, Settings } from "lucide-react"
import Chart from "@/components/Chart"
import TableRecent from "@/components/TableRecent";
import Link from "next/link"


export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const basePath = "/dashboard-analytics"

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden">

      {/* ✅ Sidebar visível sempre no desktop */}
      <aside className="hidden md:block w-60 h-screen bg-muted p-4 border-r">
        <nav className="space-y-4">
          <Link href={`${basePath}/`} className="flex items-center gap-2 hover:underline">
            <Users size={18} /> Dashboard
          </Link>
          <Link href="/settings" className="flex items-center gap-2 hover:underline">
            <Settings size={18} /> Configurações
          </Link>
        </nav>
      </aside>

      {/* ✅ Sidebar animada via Portal (mobile-only) */}
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

      <main className="flex-1 flex flex-col w-full max-w-full overflow-x-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-4 ">
          <h2 className="text-2xl font-semibold mb-4">Visão Geral</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <CardStat title="Usuários" value="1.234" icon={Users} />
            <CardStat title="Vendas" value="R$ 9.872" icon={DollarSign} color="text-green-600" />
            <CardStat title="Visualizações" value="34.198" icon={Eye} color="text-purple-600" />
          </div>

          <Chart />

          <div className="mt-8">
            <TableRecent />
          </div>
        </div>
      </main>
    </div>
  )
}
