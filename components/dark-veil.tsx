"use client"

import { useRef, useEffect } from "react"

type Props = {
  hueShift?: number
  noiseIntensity?: number
  scanlineIntensity?: number
  speed?: number
  scanlineFrequency?: number
  warpAmount?: number
  resolutionScale?: number
}

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const startTime = Date.now()

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width * resolutionScale
      canvas.height = rect.height * resolutionScale
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const animate = () => {
      if (!ctx || !canvas) return

      const time = (Date.now() - startTime) * 0.001 * speed
      const { width, height } = canvas

      const gradient = ctx.createLinearGradient(0, 0, width, height)

      // Dynamic color shifts based on time and hueShift
      const hue1 = (200 + hueShift + Math.sin(time * 0.5) * 30) % 360
      const hue2 = (240 + hueShift + Math.cos(time * 0.3) * 40) % 360
      const hue3 = (180 + hueShift + Math.sin(time * 0.7) * 20) % 360

      gradient.addColorStop(0, `hsl(${hue1}, 70%, 15%)`)
      gradient.addColorStop(0.5, `hsl(${hue2}, 60%, 10%)`)
      gradient.addColorStop(1, `hsl(${hue3}, 80%, 8%)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Add animated particles/noise effect
      if (noiseIntensity > 0) {
        const imageData = ctx.getImageData(0, 0, width, height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
          const noise = (Math.random() - 0.5) * noiseIntensity * 255
          data[i] += noise // Red
          data[i + 1] += noise // Green
          data[i + 2] += noise // Blue
        }

        ctx.putImageData(imageData, 0, 0)
      }

      // Add scanline effect
      if (scanlineIntensity > 0) {
        ctx.globalAlpha = scanlineIntensity
        ctx.fillStyle = "#000"

        for (let y = 0; y < height; y += scanlineFrequency || 4) {
          ctx.fillRect(0, y, width, 1)
        }

        ctx.globalAlpha = 1
      }

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        background: "linear-gradient(135deg, #1D242B 0%, #0077C0 50%, #1D242B 100%)",
      }}
    />
  )
}
