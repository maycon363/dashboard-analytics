'use client'
import { useState } from 'react'

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    setIsOpen(!isOpen)
  }
  return { isOpen, toggle }
}