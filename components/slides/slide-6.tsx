"use client"

import { motion } from "framer-motion"
import { DollarSign, Leaf, Users, BarChart3 } from "lucide-react"
import CountUp from "@/components/count-up"

export default function Slide6() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-green-800 mb-8 text-center"
      >
        Business Model & Monetization
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl text-center mb-12"
      >
        <p className="text-xl md:text-2xl text-gray-700">
          RecyclingBin creates value through multiple revenue streams while promoting sustainability and circular
          economy.
        </p>
      </motion.div>

      {/* Revenue Streams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
        {/* Product Sales */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-green-200 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Product sales"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">Product Sales</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold">Recycled Products</h4>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Organic fertilizers from composted waste</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Animal feed from processed food waste</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Specialty soil enhancers for different crops</span>
              </li>
            </ul>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Projected Revenue Share:</span>
                <span className="font-bold text-green-700">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="bg-green-600 h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subscription Model */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-blue-200 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Subscription model"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">Subscription Model</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold">Business Services</h4>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Regular waste collection for businesses</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Sustainability reporting and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Corporate sustainability programs</span>
              </li>
            </ul>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Projected Revenue Share:</span>
                <span className="font-bold text-blue-700">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "25%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="bg-blue-600 h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Revenue Streams */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Additional Revenue Streams</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Carbon Credits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Carbon Credits & Offsets</h4>
                <p className="text-gray-600 mb-4">
                  Generate carbon credits through waste diversion and sell them to businesses looking to offset their
                  carbon footprint.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Projected Annual Credits:</span>
                    <span className="font-bold text-green-700">
                      <CountUp end={5000} suffix=" tons" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Revenue Share:</span>
                    <span className="font-bold text-green-700">7%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partnerships */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Strategic Partnerships</h4>
                <p className="text-gray-600 mb-4">
                  Collaborate with municipalities, agricultural organizations, and environmental agencies for joint
                  initiatives.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Current Partners:</span>
                    <span className="font-bold text-purple-700">
                      <CountUp end={12} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Revenue Share:</span>
                    <span className="font-bold text-purple-700">3%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Financial Projections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-12 max-w-4xl w-full"
      >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-bold mb-6 text-center">5-Year Financial Projection</h4>

          <div className="relative h-64">
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
              {[1, 2, 3, 4, 5].map((year, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${20 + index * 15}%` }}
                  transition={{ delay: 1.7 + index * 0.2, duration: 0.8 }}
                  className="w-1/5 mx-1 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md relative group"
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${(0.5 + index * 0.7).toFixed(1)}M
                  </div>
                  <div className="absolute bottom-0 left-0 w-full text-center text-xs font-medium py-1">
                    Year {year}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full border-t border-gray-300"></div>
            <div className="absolute left-0 top-0 h-full border-r border-gray-300"></div>

            <div className="absolute -left-10 top-0 text-xs text-gray-500">$3M</div>
            <div className="absolute -left-10 top-1/3 text-xs text-gray-500">$2M</div>
            <div className="absolute -left-10 top-2/3 text-xs text-gray-500">$1M</div>
            <div className="absolute -left-10 bottom-0 text-xs text-gray-500">$0</div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium">Projected Break-Even: Year 3</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium">5-Year Revenue: $7.5M</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
