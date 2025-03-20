"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Recycle, Truck, Factory, Leaf, ArrowRight } from "lucide-react"

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Collection",
      description: "Recyclable materials are collected from homes and drop-off centers.",
      icon: <Truck className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Sorting",
      description: "Materials are sorted by type (plastic, paper, glass, metal, etc.) for processing.",
      icon: <Recycle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Processing",
      description: "Sorted materials are cleaned and processed into raw materials for new products.",
      icon: <Factory className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Transformation",
      description: "Raw materials are transformed into sustainable products for agriculture and other uses.",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
    },
  ]

  // Auto-advance steps
  setTimeout(() => {
    setActiveStep((prev) => (prev + 1) % steps.length)
  }, 5000)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${activeStep === index ? "opacity-100" : "opacity-60"}`}
            onClick={() => setActiveStep(index)}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`flex items-center justify-center h-16 w-16 rounded-full mb-4 ${activeStep === index ? "bg-green-100" : "bg-gray-100"}`}
              >
                {step.icon}
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%-8px)] transform -translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-green-50 p-6 rounded-lg"
      >
        <div className="flex items-start">
          <div className="mr-4 bg-green-100 p-2 rounded-full">{steps[activeStep].icon}</div>
          <div>
            <h3 className="text-xl font-bold mb-2">{steps[activeStep].title}</h3>
            <p className="text-gray-600">{steps[activeStep].description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

