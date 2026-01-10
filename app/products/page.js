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
    <div className="min-h-screen">
      {products.map((section, index) => {
        const isEven = index % 2 === 0
        
        return (
          <section 
            key={section.id}
            className={`${section.bgColor} ${section.textColor} relative overflow-hidden transition-all duration-700`}
            style={{
              clipPath: index === 0 ? 'none' : isEven 
                ? 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' 
                : 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
              {/* Header */}
              <div className="mb-8 sm:mb-12 text-left lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl">
                  {section.description}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                {section.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="aspect-square bg-white/20 rounded-xl mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base opacity-80">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Enquire Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className={`${section.accentColor} ${
                    section.id === 5 ? 'text-[#8B1538]' : 'text-white'
                  } px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group`}
                >
                  Enquire Now
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ 
                background: section.id === 5 ? 'rgba(255,255,255,0.3)' : 'rgba(139,21,56,0.3)',
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
              style={{ 
                background: section.id === 5 ? 'rgba(255,255,255,0.2)' : 'rgba(92,74,58,0.3)',
                transform: `translateY(-${scrollY * 0.05}px)`
              }}
            />
          </section>
        )
      })}
    </div>
  )
}