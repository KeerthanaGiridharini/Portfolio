"use client"
import type React from "react"
import { motion, type Variants } from "framer-motion"
import { Home, User, Code, Briefcase, FolderOpen, MessageSquare, Mail } from "lucide-react"

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

// Animation variants for different parts of the menu
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

function MenuBar(): React.JSX.Element {
  return (
    <motion.nav
      className="p-2 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 relative overflow-hidden"
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
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                }}
              />
              {/* Front-facing menu item */}
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl text-sm"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector(item.href)
                  target?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className={`transition-colors duration-300 ${item.iconColor}`}>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </motion.a>
              {/* Back-facing menu item for the 3D flip effect */}
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl text-sm"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  transform: "rotateX(90deg)",
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector(item.href)
                  target?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className={`transition-colors duration-300 ${item.iconColor}`}>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default MenuBar
