"use client"

import type React from "react"
import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  MessageSquare,
  Mail,
  Menu,
  X,
} from "lucide-react"

// --- MenuBar Component ---

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}


const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#hero",
    gradient: "radial-gradient(circle, rgba(0,119,192,0.15) 0%, rgba(0,119,192,0.06) 50%, rgba(0,119,192,0) 100%)",
    iconColor: "group-hover:text-[#0077C0]",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient:
      "radial-gradient(circle, rgba(199,238,255,0.15) 0%, rgba(199,238,255,0.06) 50%, rgba(199,238,255,0) 100%)",
    iconColor: "group-hover:text-[#0077C0]",
  },
  {
    icon: <Code className="h-5 w-5" />,
    label: "Skills",
    href: "#skills",
    gradient: "radial-gradient(circle, rgba(0,119,192,0.15) 0%, rgba(0,119,192,0.06) 50%, rgba(0,119,192,0) 100%)",
    iconColor: "group-hover:text-[#0077C0]",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Experience",
    href: "#experience",
    gradient: "radial-gradient(circle, rgba(29,36,43,0.15) 0%, rgba(29,36,43,0.06) 50%, rgba(29,36,43,0) 100%)",
    iconColor: "group-hover:text-[#1D242B]",
  },
  {
    icon: <FolderOpen className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
    gradient: "radial-gradient(circle, rgba(0,119,192,0.15) 0%, rgba(0,119,192,0.06) 50%, rgba(0,119,192,0) 100%)",
    iconColor: "group-hover:text-[#0077C0]",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: "Testimonials",
    href: "#testimonials",
    gradient:
      "radial-gradient(circle, rgba(199,238,255,0.15) 0%, rgba(199,238,255,0.06) 50%, rgba(199,238,255,0) 100%)",
    iconColor: "group-hover:text-[#0077C0]",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(29,36,43,0.15) 0%, rgba(29,36,43,0.06) 50%, rgba(29,36,43,0) 100%)",
    iconColor: "group-hover:text-[#1D242B]",
  },
]

// --- Animation Variants (same as your code) ---
const itemVariants: Variants = { initial: { rotateX: 0, opacity: 1 }, hover: { rotateX: -90, opacity: 0 } }
const backVariants: Variants = { initial: { rotateX: 90, opacity: 0 }, hover: { rotateX: 0, opacity: 1 } }
const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: { opacity: 1, scale: 2, transition: { opacity: { duration: 0.5 }, scale: { duration: 0.5 } } },
}
const navGlowVariants: Variants = { initial: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.5 } } }
const sharedTransition = { type: "spring" as const, stiffness: 100, damping: 20, duration: 0.5 }

function MenuBar(): React.JSX.Element {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="hidden md:block p-2 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-lg 
        border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 relative overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,119,192,0.1) 0%, rgba(199,238,255,0.1) 50%, rgba(29,36,43,0.1) 100%)",
          }}
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-1 relative z-10">
          {menuItems.map((item: MenuItem) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                  variants={glowVariants}
                  style={{ background: item.gradient, opacity: 0 }}
                />
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 relative z-10 
                  text-gray-600 dark:text-gray-300 group-hover:text-gray-900 
                  dark:group-hover:text-white transition-colors rounded-xl text-sm"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className={item.iconColor}>{item.icon}</span>
                  <span>{item.label}</span>
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-gray-800 dark:text-gray-200"
        >
          {isMobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

{/* Mobile Side Drawer */}
{isMobileOpen && (
  <>
    {/* Full-Screen Dark Overlay */}
    <div
      className="fixed inset-0 w-full h-screen bg-black/40 dark:bg-black/50 z-40"
      onClick={() => setIsMobileOpen(false)}
    />

    {/* Side Nav */}
    <div
      className="fixed top-0 left-0 h-screen w-64 z-50 shadow-lg p-6 flex flex-col gap-6
                 bg-white dark:bg-gray-900"
    >
      {menuItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-blue-600"
          onClick={() => {
            setIsMobileOpen(false)
            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  </>
)}



    </>
  )
}

export default MenuBar