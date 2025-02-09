"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, DollarSign, Clock, Star } from "lucide-react"
import { useInView } from "@/hooks/useInView"

const specials = [
  {
    id: 1,
    title: "Summer Portrait Package",
    description: "Get a professional portrait session with makeup and 5 edited photos.",
    price: 299,
    validUntil: "2025-08-31",
  },
  {
    id: 2,
    title: "Wedding Photography Bundle",
    description: "Full day wedding coverage with two photographers and a photo album.",
    price: 1999,
    validUntil: "2025-12-31",
  },
  {
    id: 3,
    title: "Family Photo Session",
    description: "Outdoor family photo session with 10 edited digital images.",
    price: 399,
    validUntil: "2025-09-30",
  },
]

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-50" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <Sparkle key={i} />
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

const Sparkle = () => {
  const randomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  })

  const [position, setPosition] = useState(randomPosition())

  useEffect(() => {
    const interval = setInterval(
      () => {
        setPosition(randomPosition())
      },
      Math.random() * 3000 + 2000,
    )

    return () => clearInterval(interval)
  }, [randomPosition]) // Added randomPosition to useEffect dependencies

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={position}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

const FestiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)

    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x: position.x - 16, y: position.y - 16 }}
    >
      <Star className="w-8 h-8 text-yellow-300" />
    </motion.div>
  )
}

export default function Specials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white pt-20">
      <FestiveCursor />
      <AnimatedBackground>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.h1
            className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Exclusive Offers
          </motion.h1>
          <motion.p
            className="text-2xl text-center mb-12 text-pink-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Capture your special moments with our limited-time deals
          </motion.p>
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((special, index) => (
              <motion.div
                key={special.id}
                className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(special.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="p-6 relative">
                  <h2 className="text-2xl font-bold mb-2 text-pink-300">{special.title}</h2>
                  <p className="text-gray-300 mb-4">{special.description}</p>
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 mr-2 text-yellow-400" />
                    <p className="text-3xl font-bold text-yellow-400">${special.price}</p>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-pink-400" />
                    <p className="text-sm text-pink-300">
                      Valid until: {new Date(special.validUntil).toLocaleDateString()}
                    </p>
                  </div>
                  <AnimatePresence>
                    {hoveredId === special.id && (
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Link
                          href="/contact"
                          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Book Now
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">Limited Time Offer</h2>
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 mr-2 text-pink-400" />
              <p className="text-xl text-pink-200">
                Book any special within the next 48 hours and get an additional 10% off!
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </AnimatedBackground>
    </div>
  )
}

