"use client"

import { motion } from "framer-motion"

interface SlideIndicatorProps {
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
}

export function SlideIndicator({ totalSlides, currentSlide, onSlideChange }: SlideIndicatorProps) {
  return (
    <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-md">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className="relative w-3 h-3 rounded-full focus:outline-none"
          aria-label={`Go to slide ${index + 1}`}
        >
          <span
            className={`absolute inset-0 rounded-full ${currentSlide === index ? "bg-green-600" : "bg-gray-300"}`}
          ></span>
          {currentSlide === index && (
            <motion.span
              layoutId="slideIndicator"
              className="absolute inset-0 rounded-full bg-green-600"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
