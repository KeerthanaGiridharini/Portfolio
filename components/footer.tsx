import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="font-manrope text-lg font-bold">Keerthana</p>
            <p className="text-sm opacity-80">UI/UX Developer</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Keerthana</span>
            <span className="opacity-60">© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
