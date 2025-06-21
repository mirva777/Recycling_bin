"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, Braces, BarChart, Bot } from "lucide-react"

export default function Slide5() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-green-800 mb-8 text-center"
      >
        Technology Stack & AI Features
      </motion.h2>

      {/* Tech Stack */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-16 max-w-5xl w-full"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Core Technologies</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-10 w-10 text-blue-600" />,
              title: "Vercel",
              description: "Cloud platform for static sites, hybrid apps, and serverless functions",
            },
            {
              icon: <Braces className="h-10 w-10 text-black" />,
              title: "Next.js",
              description: "React framework for production with server-side rendering and static site generation",
            },
            {
              icon: <Database className="h-10 w-10 text-teal-500" />,
              title: "Tailwind CSS",
              description: "Utility-first CSS framework for rapidly building custom user interfaces",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h3 className="text-2xl font-bold text-center mb-8">AI-Powered Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Bot className="h-8 w-8 text-purple-600" />,
              title: "Smart Waste Sorting",
              description:
                "AI vision systems identify and categorize different types of waste materials with high accuracy",
            },
            {
              icon: <BarChart className="h-8 w-8 text-green-600" />,
              title: "Predictive Analytics",
              description:
                "Machine learning algorithms predict waste generation patterns and optimize collection routes",
            },
            {
              icon: <Cpu className="h-8 w-8 text-red-600" />,
              title: "Quality Control",
              description: "AI monitors the quality of recycled products to ensure consistent standards",
            },
            {
              icon: <Database className="h-8 w-8 text-blue-600" />,
              title: "Personalized Recommendations",
              description: "AI suggests relevant products to farmers based on their specific needs and past purchases",
            },
            {
              icon: <Bot className="h-8 w-8 text-yellow-600" />,
              title: "Automated Customer Support",
              description: "AI chatbots provide instant assistance and answer common questions",
            },
            {
              icon: <BarChart className="h-8 w-8 text-indigo-600" />,
              title: "Impact Tracking",
              description: "AI calculates environmental impact metrics based on recycling activities",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">{feature.icon}</div>
                <div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Process Visualization */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-12 max-w-4xl w-full"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-50"></div>

          <h4 className="text-xl font-bold mb-4 relative z-10">How Our AI Works</h4>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center mb-6 md:mb-0">
                <div className="bg-purple-100 p-3 rounded-full inline-flex mb-3">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium">Data Collection</p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.8, duration: 1 }}
                className="hidden md:block h-1 bg-gradient-to-r from-purple-500 to-blue-500 flex-grow mx-4"
              ></motion.div>

              <div className="text-center mb-6 md:mb-0">
                <div className="bg-blue-100 p-3 rounded-full inline-flex mb-3">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Processing</p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.1, duration: 1 }}
                className="hidden md:block h-1 bg-gradient-to-r from-blue-500 to-green-500 flex-grow mx-4"
              ></motion.div>

              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full inline-flex mb-3">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium">Insights & Action</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              className="mt-6 text-sm text-gray-600 text-center"
            >
              Our AI continuously learns from new data, improving accuracy and efficiency over time
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
