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

    // Create food particles
    class FoodParticle {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      color: string
      opacity: number
      speed: number
      type: string

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 15 + 5
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.opacity = Math.random() * 0.3 + 0.1
        this.speed = Math.random() * 0.5 + 0.1

        const foodTypes = ["🍎", "🥕", "🍞", "🥬", "🍌"]
        this.type = foodTypes[Math.floor(Math.random() * foodTypes.length)]

        const colors = ["rgba(255, 165, 0, 0.2)", "rgba(255, 140, 0, 0.2)", "rgba(255, 69, 0, 0.2)"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
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

        // Draw simple circle with food color
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    // Create multiple particles
    const particles: FoodParticle[] = []
    const particleCount = Math.floor((canvas.width * canvas.height) / 20000)

    for (let i = 0; i < particleCount; i++) {
      particles.push(new FoodParticle(canvas))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(canvas)
        particle.draw(ctx)
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
