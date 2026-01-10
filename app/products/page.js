'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    {
      id: 0,
      title: "Our Products",
      description: "Discover our exquisite collection of handcrafted treasures. Each piece tells a story of passion, tradition, and timeless elegance. Explore the finest craftsmanship curated just for you.",
      bgColor: "bg-[#8B1538]",
      textColor: "text-white",
      accentColor: "bg-[#D4C4A8]",
      isIntro: true,
      items: []
    },
    {
      id: 1,
      title: "Artisan Collection",
      description: "Handcrafted pieces that blend tradition with modern elegance.",
      bgColor: "bg-white",
      textColor: "text-[#5C4A3A]",
      accentColor: "bg-[#8B1538]",
      items: [
        { name: "Ja khushi naam", image: "/a.png", desc: "Give description" },
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" }
      ]
    },
    {
      id: 2,
      title: "Heritage Series",
      description: "Timeless designs inspired by cultural richness and authenticity.",
      bgColor: "bg-[#8B6F47]",
      textColor: "text-white",
      accentColor: "bg-[#FAF8F5]",
      items: [
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" },
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" }
      ]
    },
    {
      id: 3,
      title: "Modern Fusion",
      description: "Contemporary interpretations of classic craftsmanship techniques.",
      bgColor: "bg-[#FAF8F5]",
      textColor: "text-[#5C4A3A]",
      accentColor: "bg-[#8B1538]",
      items: [
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" },
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" }
      ]
    },
    {
      id: 4,
      title: "Natural Elegance",
      description: "Organic materials transformed into exquisite decorative pieces.",
      bgColor: "bg-[#8B1538]",
      textColor: "text-white",
      accentColor: "bg-white",
      items: [
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" },
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" }
      ]
    },
    {
      id: 5,
      title: "Luxury Essentials",
      description: "Premium handcrafted items for the discerning collector.",
      bgColor: "bg-[#D4C4A8]",
      textColor: "text-[#3D2E1F]",
      accentColor: "bg-[#8B1538]",
      items: [
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" },
        { name: "Ja khushi naam", image: "/vercel.svg", desc: "Give description" }
      ]
    }
  ]

  return (
    <div className="min-h-screen -mt-20">
      {products.map((section, index) => {
        return (
          <section 
            key={section.id}
            className={`${section.bgColor} ${section.textColor} relative overflow-hidden`}
          >
            {/* Flying Birds - Only in intro section */}
            {section.isIntro && (
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
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
              {/* Header */}
              <div 
                className={`${section.isIntro ? 'text-center min-h-[60vh] flex flex-col justify-center' : 'text-left'} mb-10 sm:mb-14`}
              >
                <h2 className={`${section.isIntro ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-4xl sm:text-5xl lg:text-6xl'} font-bold mb-6 transform transition-all duration-700 ${!section.isIntro && 'hover:translate-x-2'}`}>
                  {section.title}
                </h2>
                <p className={`text-base sm:text-lg lg:text-xl opacity-90 ${section.isIntro ? 'max-w-4xl mx-auto leading-relaxed' : 'max-w-3xl'}`}>
                  {section.description}
                </p>
              </div>

              {/* Products Grid - Only show if not intro section */}
              {!section.isIntro && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-14">
                  {section.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className="aspect-square bg-white/20 rounded-xl mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-opacity-80 transition-all">
                        {item.name}
                      </h3>
                      <p className="text-sm sm:text-base opacity-80 group-hover:opacity-100 transition-all">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Enquire Button - Only show if not intro section */}
              {!section.isIntro && (
                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className={`${section.accentColor} ${
                      section.id === 2 || section.id === 4 ? 'text-[#8B1538]' : section.id === 5 ? 'text-white' : 'text-white'
                    } px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group border-2 ${
                      section.id === 2 || section.id === 4 ? 'border-[#FAF8F5]' : section.id === 5 ? 'border-[#8B1538]' : 'border-[#8B1538]'
                    }`}
                  >
                    Enquire Now
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {/* Decorative Floating Elements */}
            <div 
              className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ 
                background: section.id === 0 || section.id === 2 || section.id === 4 ? 'rgba(255,255,255,0.4)' : 'rgba(139,21,56,0.3)',
                transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)`
              }}
            />
            <div 
              className="absolute bottom-10 left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ 
                background: section.id === 0 || section.id === 2 || section.id === 4 ? 'rgba(255,255,255,0.3)' : 'rgba(92,74,58,0.3)',
                transform: `translateY(-${scrollY * 0.03}px) rotate(-${scrollY * 0.02}deg)`
              }}
            />
          </section>
        )
      })}
    </div>
  )
}