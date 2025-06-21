"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Recycle } from "lucide-react"

export default function Slide1() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create recycling symbols
    class RecyclingSymbol {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      color: string
      opacity: number
      speed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 30 + 10
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.color = `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100)}, 0.2)`
        this.opacity = Math.random() * 0.5 + 0.1
        this.speed = Math.random() * 0.5 + 0.1
      }

      update() {
        this.y += this.speed
        this.rotation += this.rotationSpeed

        if (this.y > canvas.height + this.size) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color

        // Draw recycling arrow triangle
        ctx.beginPath()
        const arrowSize = this.size

        // First arrow
        ctx.moveTo(0, -arrowSize)
        ctx.lineTo(arrowSize * 0.866, arrowSize * 0.5)
        ctx.lineTo(-arrowSize * 0.866, arrowSize * 0.5)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }
    }

    // Create multiple symbols
    const symbols: RecyclingSymbol[] = []
    const symbolCount = Math.floor((canvas.width * canvas.height) / 15000)

    for (let i = 0; i < symbolCount; i++) {
      symbols.push(new RecyclingSymbol())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      symbols.forEach((symbol) => {
        symbol.update()
        symbol.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center mb-6"
        >
          <Recycle className="h-20 w-20 text-green-600 mr-4" />
          <h1 className="text-6xl md:text-8xl font-bold text-green-800">RecyclingBin</h1>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-4xl text-green-700 mb-12"
        >
          Turning Waste into Opportunity
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button className="group flex items-center text-lg md:text-xl text-green-600 hover:text-green-800 transition-colors">
            <span>Explore Our Solution</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Background image - would be replaced with actual high-quality image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/images/backgrounds/nature-background.jpg"
          alt="Nature background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
