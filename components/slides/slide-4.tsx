"use client"

import { motion } from "framer-motion"
import { User, ShoppingBag, Leaf, Info } from "lucide-react"

export default function Slide4() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-green-800 mb-8 text-center"
      >
        User Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">
        {/* For Recyclers */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-green-200 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Recyclers experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">For Recyclers</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <User className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold">Donate Waste & Earn Rewards</h4>
            </div>

            <div className="space-y-6">
              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors cursor-pointer">
                <h5 className="font-medium mb-2 group-hover:text-green-700 transition-colors">Easy Scheduling</h5>
                <p className="text-gray-600 text-sm">
                  Use our intuitive app to schedule pickups or find the nearest drop-off center with just a few taps.
                </p>
              </div>

              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors cursor-pointer">
                <h5 className="font-medium mb-2 group-hover:text-green-700 transition-colors">Track Your Impact</h5>
                <p className="text-gray-600 text-sm">
                  See how much waste you've diverted from landfills and the positive environmental impact you've made.
                </p>
              </div>

              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors cursor-pointer">
                <h5 className="font-medium mb-2 group-hover:text-green-700 transition-colors">Reward System</h5>
                <p className="text-gray-600 text-sm">
                  Earn points for every kilogram of waste recycled, redeemable for eco-friendly products or discounts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* For Farmers & Buyers */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-48 bg-green-200 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Farmers and buyers experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white">For Farmers & Buyers</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold">Purchase Sustainable Products</h4>
            </div>

            <div className="space-y-6">
              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors cursor-pointer">
                <h5 className="font-medium mb-2 group-hover:text-green-700 transition-colors">Quality Products</h5>
                <p className="text-gray-600 text-sm">
                  Browse our marketplace for high-quality fertilizers and animal feed made from recycled materials.
                </p>
              </div>

              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors cursor-pointer">
                <h5 className="font-medium mb-2 group-hover:text-green-700 transition-colors">
                  Transparent Information
                </h5>
                <p className="text-gray-600 text-sm">
                  Access detailed information about product ingredients, chemical composition, and recycling methods.
                </p>
              </div>

              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors cursor-pointer">
                <h5 className="font-medium mb-2 group-hover:text-green-700 transition-colors">Subscription Options</h5>
                <p className="text-gray-600 text-sm">
                  Set up recurring deliveries for consistent supply and enjoy special pricing for regular customers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Showcase */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-12 w-full max-w-6xl"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Featured Recycled Products</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Organic Compost",
              image: "/placeholder.svg?height=300&width=300",
              chemicals: ["Beneficial Microorganisms", "Calcium Carbonate", "Humic Acids"],
            },
            {
              name: "Plant Nutrient Mix",
              image: "/placeholder.svg?height=300&width=300",
              chemicals: ["Nitrogen", "Phosphorus", "Potassium"],
            },
            {
              name: "Poultry Feed",
              image: "/placeholder.svg?height=300&width=300",
              chemicals: ["Probiotics", "Vitamin E", "Calcium"],
            },
            {
              name: "Cattle Supplement",
              image: "/placeholder.svg?height=300&width=300",
              chemicals: ["Protein Concentrate", "Molasses", "Minerals"],
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="h-40 bg-gray-100 relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white p-1 rounded-full shadow-md cursor-pointer">
                    <Info className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <div className="mt-2">
                  <div className="flex items-center">
                    <Leaf className="h-4 w-4 text-green-500 mr-1" />
                    <p className="text-xs text-gray-500">Key ingredients:</p>
                  </div>
                  <ul className="mt-1 space-y-1">
                    {product.chemicals.map((chemical, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>{chemical}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
