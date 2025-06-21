"use client"

import { motion } from "framer-motion"
import { Trash2, AlertTriangle, Droplets } from "lucide-react"
import CountUp from "@/components/count-up"

export default function Slide2() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-green-800 mb-8 text-center"
      >
        The Problem
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Problem 1: Landfills */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
        >
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <Trash2 className="h-10 w-10 text-red-600" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Overflowing Landfills</h3>
          <div className="text-4xl font-bold text-red-600 my-4">
            <CountUp end={2.01} decimals={2} suffix=" Billion" />
          </div>
          <p className="text-gray-600 text-center">
            Tons of municipal waste generated globally each year, with most ending up in landfills.
          </p>

          <div className="mt-6 w-full bg-gray-200 rounded-full h-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="bg-red-500 h-4 rounded-full"
            ></motion.div>
          </div>
          <p className="text-sm text-gray-500 mt-2">70% of waste could be recycled but isn't</p>
        </motion.div>

        {/* Problem 2: Pollution */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
        >
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <Droplets className="h-10 w-10 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Environmental Pollution</h3>
          <div className="text-4xl font-bold text-orange-600 my-4">
            <CountUp end={8} suffix=" Million" />
          </div>
          <p className="text-gray-600 text-center">
            Tons of plastic waste enter our oceans every year, harming marine life and ecosystems.
          </p>

          <div className="mt-6 relative w-full h-32">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute bottom-0 w-full bg-blue-100 rounded-t-lg overflow-hidden"
            >
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute bottom-0 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-blue-500">
                  <path
                    fill="currentColor"
                    fillOpacity="0.5"
                    d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Problem 3: Uzbekistan */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
        >
          <div className="bg-yellow-100 p-4 rounded-full mb-4">
            <AlertTriangle className="h-10 w-10 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Uzbekistan's Challenge</h3>
          <div className="text-4xl font-bold text-yellow-600 my-4">
            <CountUp end={12.5} decimals={1} suffix="%" />
          </div>
          <p className="text-gray-600 text-center">
            Only a small percentage of waste is properly recycled in Uzbekistan due to lack of infrastructure.
          </p>

          <div className="mt-6 w-full">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    Current
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    Potential
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "12.5%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "67.5%" }}
                  transition={{ delay: 1.3, duration: 1.5 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-12 max-w-4xl text-center"
      >
        <p className="text-xl md:text-2xl text-gray-700">
          Millions of tons of organic and recyclable waste go to landfills each year, creating environmental hazards and
          wasting valuable resources that could be transformed into useful products.
        </p>
      </motion.div>
    </div>
  )
}
