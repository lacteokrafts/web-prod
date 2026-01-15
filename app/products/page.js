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
    <>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        @keyframes shimmerEffect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

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

            {/* Customized Banner - Shows only when Customized filter is active */}
            {activeFilter === 'Customized' && (
              <div className="mt-12 sm:mt-16 lg:mt-20">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#8B1538] via-[#6B0F2A] to-[#5C0E24] rounded-3xl shadow-2xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C4A8] opacity-10 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Icon */}
                      <div className="mb-6 sm:mb-8 flex justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-8 h-8 sm:w-10 sm:h-10 text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                      </div>

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Looking for Something Unique?
                      </h2>
                      
                      {/* Description */}
                      <p className="text-base sm:text-lg lg:text-xl text-white text-opacity-90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                        We specialize in creating bespoke pieces tailored to your vision. From personalized jewelry to custom mementos, let us bring your ideas to life with exceptional craftsmanship.
                      </p>

                      {/* CTA Button */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-white text-[#8B1538] px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#D4C4A8] hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                      >
                        <span>Get Your Custom Design</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>

                      {/* Additional info */}
                      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-white text-opacity-80 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Expert Craftsmanship</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Timely Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                      style={{
                        animation: 'shimmerEffect 3s infinite'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}