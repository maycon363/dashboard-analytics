'use client'

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Settings, X } from "lucide-react"
import Link from "next/link"

type SidebarProps = {
  isOpen: boolean
  toggle: () => void
}

export default function Sidebar({ isOpen, toggle }: SidebarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Correção 1: Garantir que o componente só renderize no cliente, evitando erro de 'document' undefined
  if (!mounted) return null

  // Correção 2: Captura o container do portal e verifica se existe para evitar erro "Target container is not a DOM element"
  const portalRoot = document.getElementById("portal")
  if (!portalRoot) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 z-50 w-60 h-full bg-muted border-r p-4 md:hidden"
        >
          <button onClick={toggle} className="mb-4">
            <X size={24} />
          </button>
          <nav className="space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:underline">
              <Home size={18} /> Dashboard
            </Link>
            <Link href="/settings" className="flex items-center gap-2 hover:underline">
              <Settings size={18} /> Configurações
            </Link>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>,
    portalRoot // Correção 3: Passa o container seguro para o portal
  )
}
