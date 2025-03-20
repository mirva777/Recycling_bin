"use client"

import { useEffect, useRef } from "react"

export function RecyclingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

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

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 10
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.color = `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100)}, 0.2)`
        this.opacity = Math.random() * 0.5 + 0.1
        this.speed = Math.random() * 0.5 + 0.1
      }

      update(canvas: HTMLCanvasElement) {
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
    const symbolCount = Math.floor((canvas.width * canvas.height) / 15000) // Adjust density based on screen size

    for (let i = 0; i < symbolCount; i++) {
      symbols.push(new RecyclingSymbol(canvas))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      symbols.forEach((symbol) => {
        symbol.update(canvas)
        symbol.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}

