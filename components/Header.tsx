'use client'
import { ModeToggle } from "./ModeToggle"
import { Menu } from "lucide-react"

type HeaderProps = {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="w-full p-4 border-b flex items-center justify-between">
      <button onClick={toggleSidebar} className="md:hidden mr-4">
        <Menu size={24} />
      </button>
      <h1 className="text-xl font-bold flex-1">📊 Dashboard</h1>
      <ModeToggle />
    </header>
  )
}
