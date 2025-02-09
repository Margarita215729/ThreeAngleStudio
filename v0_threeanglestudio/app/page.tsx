"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicked, setIsClicked] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%208@33.33x-q0MwijEXiWRrETdt850xB5zpS75Om5.png"
            alt="ThreeangleStudio Logo"
            width={200}
            height={100}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to ThreeangleStudio</h1>
          <p className="text-xl mb-8 text-gray-200">Capturing Your Best Moments</p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute w-20 h-20 rounded-full pointer-events-none mix-blend-screen"
        style={{
          backgroundColor: isClicked ? "#ffccb0" : "#ffffff",
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isClicked ? 1.5 : 1,
        }}
        animate={{ scale: isClicked ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  )
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <InteractiveHero />

      <div ref={containerRef} className="container mx-auto px-4 py-24 space-y-24">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          style={{
            opacity,
            scale,
          }}
        >
          <div className="md:w-1/2">
            <Image
              src="/richard-marlow.jpg"
              alt="Richard Marlow"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Richard Marlow</h2>
            <p className="text-lg mb-4">
              With over 15 years of experience in professional photography, Richard Marlow brings a wealth of knowledge
              and creativity to every shoot. His expertise spans various styles, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Portrait photography</li>
              <li>Fashion and editorial</li>
              <li>Wedding and event coverage</li>
              <li>Landscape and nature</li>
              <li>Studio and on-location shoots</li>
            </ul>
            <p className="text-lg mb-4">Richard offers flexible options for clients, including:</p>
            <ul className="list-disc list-inside">
              <li>On-location photoshoots at your preferred venue</li>
              <li>Studio sessions with professional lighting and backdrops</li>
              <li>Destination photography for special events</li>
              <li>Post-processing and retouching services</li>
            </ul>
          </div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row-reverse items-center gap-8" style={{ opacity, scale }}>
          <div className="md:w-1/2">
            <Image
              src="/margarita-makeeva.jpg"
              alt="Margarita Makeeva"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Margarita Makeeva</h2>
            <p className="text-lg mb-4">
              Margarita Makeeva is our talented makeup artist with a passion for bringing out the best in every client.
              Her versatile skills cover a wide range of makeup styles, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Soft glam for everyday elegance</li>
              <li>Smokey eyes for a dramatic look</li>
              <li>Bridal makeup with pre-wedding trials</li>
              <li>Natural and nude looks</li>
              <li>Avant-garde and editorial makeup</li>
              <li>Special effects and costume makeup</li>
            </ul>
            <p className="text-lg">
              Margarita works closely with each client to understand their vision and create a personalized look that
              enhances their natural beauty and complements the photoshoot theme.
            </p>
          </div>
        </motion.div>

        <motion.div className="text-center" style={{ opacity, scale }}>
          <h2 className="text-3xl font-bold mb-8">Our Collaborative Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/collaboration-1.jpg" alt="Collaboration 1" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/collaboration-2.jpg" alt="Collaboration 2" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                src="/collaboration-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-lg mt-8">
            Together, Richard and Margarita create stunning visual stories that capture the essence of each client's
            unique personality and style. Their collaborative approach ensures a seamless experience from makeup
            application to the final edited photographs.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

