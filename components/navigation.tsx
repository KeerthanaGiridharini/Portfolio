"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 80; // adjust if your navbar is taller/shorter

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");

  // Header background on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observe sections to keep active item highlighted while scrolling
  useEffect(() => {
    const sectionEls = navItems
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    // Trigger when the "probe line" (rootMargin top) is within a section.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${(entry.target as HTMLElement).id}`;
            setActiveSection(id);
          }
        });
      },
      {
        // Adjust rootMargin for better detection - trigger when section is near the top of viewport
        root: null,
        rootMargin: `-${NAV_HEIGHT + 20}px 0px -70% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionEls.forEach((el) => observer.observe(el));

    // Fallback scroll listener for better responsiveness
    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAV_HEIGHT + 50;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const section = sectionEls[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const id = `#${section.id}`;
          if (activeSection !== id) {
            setActiveSection(id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // Smooth scroll + immediate highlight on click
  const scrollToSection = (href: string) => {
    const el = document.querySelector<HTMLElement>(href);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - (NAV_HEIGHT + 12);
    setActiveSection(href); // highlight right away
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => {
              scrollToSection("#hero");
            }}
            className="font-manrope text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Keerthana
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 rounded-full px-2 py-1 bg-white/70 backdrop-blur shadow-md ring-1 ring-slate-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-md ring-2 ring-primary/30 scale-105"
                      : "text-slate-700 hover:text-primary hover:bg-slate-100 hover:scale-105"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="ml-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
<button
  className="md:hidden"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-label="Toggle menu"
>
  {isMobileMenuOpen ? (
    <X className="h-6 w-6 text-gray-900 dark:text-white" />
  ) : (
    <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
  )}
</button>

{/* Mobile Side Menu */}
{isMobileMenuOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Drawer */}
    <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-950 shadow-lg z-50 transform transition-transform duration-300 animate-slide-in">
      <nav className="px-6 py-6 flex flex-col space-y-6">
        {navItems.map((item) => (
  <button
    key={item.name}
    onClick={() => scrollToSection(item.href)}
    className="text-left flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {item.name}
  </button>
))}


        
      </nav>
    </div>
  </>
)}

      </div>
    </nav>
  );
}