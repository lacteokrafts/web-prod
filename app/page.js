'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fade starts immediately - fully gone by 300px scroll
  const opacity = Math.max(0, 1 - scrollY / 300)
  // Subtle upward movement as it fades
  const translateY = -scrollY * 0.3

  return (
    <div className="-mt-20">
      {/* Section 1 - Welcome with Background Image */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/a.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div 
          className="text-center max-w-4xl relative z-10"
          style={{ 
            opacity,
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl px-4">
            Welcome to LacteoKrafts
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed drop-shadow-lg px-4">
            Crafted with care and passion
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4A3A] mb-4 sm:mb-6 text-center">
            Section 2
          </h2>
          <p className="text-base sm:text-lg text-[#8B6F47] leading-relaxed text-center px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4A3A] mb-4 sm:mb-6 text-center">
            Section 3
          </h2>
          <p className="text-base sm:text-lg text-[#8B6F47] leading-relaxed text-center px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
    </div>
  )
}