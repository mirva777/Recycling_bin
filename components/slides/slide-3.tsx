"use client"

import { motion } from "framer-motion"
import { Recycle, Truck, MapPin } from "lucide-react"

export default function Slide3() {
  const steps = [
    { icon: <Recycle />, title: "Collection", description: "Waste is collected through pickup or drop-off" },
    { icon: <Recycle />, title: "Sorting", description: "AI-powered sorting separates different materials" },
    { icon: <Recycle />, title: "Processing", description: "Materials are processed into new products" },
    { icon: <Recycle />, title: "Distribution", description: "Products are sold to farmers and consumers" },
  ]

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-green-800 mb-8 text-center"
      >
        Our Solution
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl text-center mb-12"
      >
        <p className="text-xl md:text-2xl text-gray-700">
          RecyclingBin is an AI-driven digital platform that connects waste producers with recycling facilities and
          transforms waste into valuable sustainable products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full mb-12">
        {/* Collection Method 1: Pickup */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-green-200 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="On-demand pickup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">On-Demand Pickup</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold">Schedule a Pickup</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Minimum 10kg of recyclable materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Convenient scheduling through our app</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Earn points based on quantity and material type</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Track your environmental impact</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Collection Method 2: Drop-off */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-green-200 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Drop-off centers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">Drop-Off Centers</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold">Visit a Center</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>No minimum quantity required</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Conveniently located throughout the city</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Earn eco-product coupons on the spot</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Educational resources available at centers</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Recycling Process */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <h3 className="text-2xl font-bold text-center mb-8">The Recycling Process</h3>
        <div className="relative">
          {/* Process Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center mb-8 md:mb-0 w-full md:w-auto"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <div className="text-green-600 h-8 w-8">{step.icon}</div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full hidden md:block">
            <div className="h-1 bg-gray-200 w-full relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute top-0 left-0 h-full bg-green-500"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
