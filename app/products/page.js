'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  const [scrollY, setScrollY] = useState(0)
  const [activeFilter, setActiveFilter] = useState('All')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseTrail, setMouseTrail] = useState([])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkDesktop)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY, id: Date.now() }
      setMousePosition(newPos)
      
      // Add to trail
      setMouseTrail(prev => {
        const updated = [...prev, newPos].slice(-15) // Keep last 15 positions
        return updated
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Clean up old trail positions
    const interval = setInterval(() => {
      setMouseTrail(prev => prev.filter(pos => Date.now() - pos.id < 2000))
    }, 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [isDesktop])

 const allProducts = [
  { name: "Customized 1", image: "/products/customized1.png", category: "Customized", desc: "" },
  { name: "Customized 2", image: "/products/customized2.png", category: "Customized", desc: "" },
  { name: "Earrings 1", image: "/products/earings1.png", category: "Earrings", desc: "" },
  { name: "Earrings 2", image: "/products/earings2.png", category: "Earrings", desc: "" },
  { name: "Earrings 3", image: "/products/earings3.png", category: "Earrings", desc: "" },
  { name: "Earrings 4", image: "/products/earings4.png", category: "Earrings", desc: "" },
  { name: "Earrings 5", image: "/products/earings5.png", category: "Earrings", desc: "" },
  { name: "Mementos 1", image: "/products/memntos1.png", category: "Mementos", desc: "" },
  { name: "Mementos 2", image: "/products/memntos2.png", category: "Mementos", desc: "" },
  { name: "Mementos 3", image: "/products/memntos3.png", category: "Mementos", desc: "" },
  { name: "Pendant 1", image: "/products/pendent1.png", category: "Pendants", desc: "" },
  { name: "Pendant 2", image: "/products/pendent2.png", category: "Pendants", desc: "" },
  { name: "Pendant 3", image: "/products/pendent3.png", category: "Pendants", desc: "" },
  { name: "Toys", image: "/products/toys.png", category: "Toys", desc: "" }
]

  const categories = ['All', 'Earrings', 'Mementos', 'Pendants', 'Toys', 'Customized']

  const filteredProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter)

  return (
    <div className="min-h-screen -mt-20">
      {/* Hero Section with Birds and Water Flow Effect */}
      <section className="bg-[#8B1538] text-white relative overflow-hidden">
        {/* Water Flow Effect - Desktop Only */}
        {isDesktop && (
          <>
            {/* Flowing ripples from mouse trail */}
            {mouseTrail.map((pos, index) => {
              const age = Date.now() - pos.id
              const opacity = Math.max(0, 1 - age / 2000)
              const scale = 1 + (age / 2000) * 3
              
              return (
                <div
                  key={pos.id}
                  className="absolute pointer-events-none"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity: opacity * 0.3,
                    transition: 'all 0.1s ease-out'
                  }}
                >
                  <div
                    className="w-40 h-40 rounded-full border-2 border-[#D4C4A8]"
                    style={{
                      animation: 'pulse 1s ease-out forwards'
                    }}
                  />
                </div>
              )
            })}

            {/* Main flowing gradient */}
            <div 
              className="absolute inset-0 pointer-events-none z-1 transition-all duration-300 ease-out"
              style={{
                background: `
                  radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    rgba(212, 196, 168, 0.15), 
                    transparent 30%),
                  radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                    rgba(255, 255, 255, 0.08), 
                    transparent 50%)
                `
              }}
            />

            {/* Animated wave distortion */}
            <div 
              className="absolute pointer-events-none z-1"
              style={{
                left: mousePosition.x - 300,
                top: mousePosition.y - 300,
                width: '600px',
                height: '600px',
                background: `radial-gradient(circle, rgba(139, 111, 71, 0.3) 0%, transparent 60%)`,
                filter: 'blur(60px)',
                transform: 'translate(0, 0)',
                transition: 'left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animation: 'wave 3s ease-in-out infinite'
              }}
            />

            {/* Secondary wave */}
            <div 
              className="absolute pointer-events-none z-1"
              style={{
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, rgba(212, 196, 168, 0.2) 0%, transparent 70%)`,
                filter: 'blur(40px)',
                transform: 'translate(0, 0)',
                transition: 'left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animation: 'wave 4s ease-in-out infinite reverse'
              }}
            />
          </>
        )}

        {/* Flying Birds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Bird 1 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird1 15s linear infinite',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" className="wing-right"/>
            </svg>
          </div>
          
          {/* Bird 2 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird2 20s linear infinite',
              animationDelay: '3s'
            }}
          >
            <svg width="35" height="35" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" className="wing-right"/>
            </svg>
          </div>
          
          {/* Bird 3 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird3 18s linear infinite',
              animationDelay: '7s'
            }}
          >
            <svg width="38" height="38" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.75" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.75" className="wing-right"/>
            </svg>
          </div>
          
          {/* Bird 4 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird4 22s linear infinite',
              animationDelay: '10s'
            }}
          >
            <svg width="32" height="32" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.65" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.75"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.65" className="wing-right"/>
            </svg>
          </div>
          {/* Bird 5 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird1 17s linear infinite',
              animationDelay: '5s'
            }}
          >
            <svg width="36" height="36" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" className="wing-right"/>
            </svg>
          </div>

          {/* Bird 6 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird2 23s linear infinite',
              animationDelay: '11s'
            }}
          >
            <svg width="34" height="34" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" className="wing-right"/>
            </svg>
          </div>

          {/* Bird 7 */}
          <div 
            className="absolute"
            style={{
              animation: 'flyBird3 19s linear infinite',
              animationDelay: '14s'
            }}
          >
            <svg width="37" height="37" viewBox="0 0 50 50" className="bird-flap">
              <path d="M25 15 Q15 10, 10 15 Q15 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.75" className="wing-left"/>
              <ellipse cx="25" cy="20" rx="3" ry="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85"/>
              <path d="M25 15 Q35 10, 40 15 Q35 12, 25 15 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.75" className="wing-right"/>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Our Products
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Discover our exquisite collection of handcrafted treasures. Each piece tells a story of passion, tradition, and timeless elegance. Explore the finest craftsmanship curated just for you.
            </p>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div 
          className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ 
            background: 'rgba(255,255,255,0.4)',
            transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)`
          }}
        />
        <div 
          className="absolute bottom-10 left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ 
            background: 'rgba(255,255,255,0.3)',
            transform: `translateY(-${scrollY * 0.03}px) rotate(-${scrollY * 0.02}deg)`
          }}
        />

        {/* Add wave animation keyframes */}
        <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -20px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 20px) scale(1.05); }
          }
        `}</style>
      </section>

      {/* Filter Section */}
      <section className="bg-[#FAF8F5] py-8 sm:py-12 sticky top-10 z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#8B1538] text-white shadow-lg scale-105'
                    : 'bg-[#D4C4A8] text-[#5C4A3A] hover:bg-[#8B1538] hover:text-white hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#FAF8F5] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="aspect-square bg-[#FAF8F5] rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#5C4A3A] group-hover:text-[#8B1538] transition-all">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4A3A] opacity-70 mb-4">
                  {product.desc}
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#8B1538] text-white px-4 py-2 sm:py-3 rounded-full font-semibold text-sm hover:bg-[#6B0F2A] hover:scale-105 transition-all duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}