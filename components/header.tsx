"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Utensils, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavLink {
  href: string
  label: string
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Define navigation links
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/reservation", label: "Reservation" },
    { href: "/contact", label: "Contact" },
  ]

  // Check if the link is active
  const isActive = (href: string) => pathname === href

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Close the menu when a link is clicked or mouse leaves the menu
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget as Node)) {
      setMenuOpen(false)
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Utensils className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-primary">Golden Yurt Cafe</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/reservation">Book a Table</Link>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-primary">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            ref={menuRef}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-background/80 backdrop-blur-md py-4 md:hidden"
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary' : ''}`}
                  onClick={handleLinkClick} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
