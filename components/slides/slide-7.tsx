"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Slide7() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/placeholder.svg?height=2160&width=3840"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated wind turbines */}
        <div className="absolute bottom-0 left-10 w-20 h-80">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 w-4 h-64 bg-gray-400 left-1/2 transform -translate-x-1/2 rounded-t-lg"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20"
            >
              <div className="absolute top-1/2 left-1/2 w-4 h-40 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full origin-center rotate-0"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-40 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full origin-center rotate-120"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-40 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full origin-center rotate-240"></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 right-20 w-16 h-64">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 w-3 h-48 bg-gray-400 left-1/2 transform -translate-x-1/2 rounded-t-lg"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16"
            >
              <div className="absolute top-1/2 left-1/2 w-3 h-32 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full origin-center rotate-0"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-32 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full origin-center rotate-120"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-32 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full origin-center rotate-240"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-green-800 mb-8"
        >
          Join Us for a <span className="text-green-600">Greener Future</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Be part of the solution to waste management challenges while creating sustainable value for communities and
          the environment.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
            Sign Up <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Learn More
          </Button>
          <Button size="lg" variant="secondary" className="text-lg">
            Contact Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">info@recyclingbin.com</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">+998 (90) 123-4567</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600">Tashkent, Uzbekistan</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
