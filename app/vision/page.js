'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Vision() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ctaMousePosition, setCtaMousePosition] = useState({ x: 0, y: 0 })
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
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDesktop])

  // Separate mouse tracking for CTA section
  const handleCtaMouseMove = (e) => {
    if (!isDesktop) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    setCtaMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height
    })
  }

  const visionSegments = [
    {
      title: "Personal Gifting",
      description: "Every gift tells a story. Our handcrafted pieces are designed to capture moments of love, celebration, and connection. From birthdays to weddings, anniversaries to milestones, we create treasures that speak from the heart and last a lifetime.",
      image: "vision/personal_gifting.png",
      bgColor: "bg-white",
      textColor: "text-[#5C4A3A]",
      accentColor: "bg-[#8B1538]"
    },
    {
      title: "Academic Events",
      description: "Celebrating excellence and achievement with elegance. Our custom-designed mementos honor academic milestones, convocations, and institutional legacies. Each piece reflects the prestige and tradition of educational excellence, crafted to inspire future generations.",
      image: "vision/academic.png",
      bgColor: "bg-[#FAF8F5]",
      textColor: "text-[#5C4A3A]",
      accentColor: "bg-[#8B6F47]"
    },
    {
      title: "Exhibitions & Shows",
      description: "Artistry that captivates and inspires. Our exhibition pieces blend traditional craftsmanship with contemporary design, creating focal points that draw attention and spark conversation. Perfect for galleries, cultural events, and creative showcases.",
      image: "vision/exhibitions.png",
      bgColor: "bg-white",
      textColor: "text-[#5C4A3A]",
      accentColor: "bg-[#D4C4A8]"
    },
    {
      title: "Corporate Mementos",
      description: "Elevate your brand with sophistication. Our corporate collections transform recognition into art. From executive gifts to employee appreciation, client tokens to milestone celebrations, we craft pieces that embody professionalism and lasting value.",
      image: "vision/corporate.png",
      bgColor: "bg-[#8B6F47]",
      textColor: "text-white",
      accentColor: "bg-[#FAF8F5]"
    },
    {
      title: "Home Decor",
      description: "Transform spaces into sanctuaries. Our home décor collection brings warmth, character, and timeless elegance to every room. Each handcrafted piece is designed to complement your lifestyle while adding a touch of artisanal beauty to your living spaces.",
      image: "vision/home.png",
      bgColor: "bg-[#D4C4A8]",
      textColor: "text-[#3D2E1F]",
      accentColor: "bg-[#8B1538]"
    }
  ]

  return (
    <div className="min-h-screen -mt-20">
      {/* Hero Section with Parallax and Mouse Interaction */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-linear-to-b from-[#8B1538]/90 via-[#8B1538]/80 to-[#5C4A3A]/90"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          {/* Animated Geometric Shapes with Mouse Interaction */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white/20 rounded-full transition-transform duration-300 ease-out"
              style={{
                transform: `rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.0005}) translate(${isDesktop ? mousePosition.x * 20 : 0}px, ${isDesktop ? mousePosition.y * 20 : 0}px)`
              }}
            />
            <div 
              className="absolute bottom-1/3 right-1/4 w-96 h-96 border-2 border-white/10 rounded-full transition-transform duration-500 ease-out"
              style={{
                transform: `rotate(-${scrollY * 0.15}deg) scale(${1 + scrollY * 0.0003}) translate(${isDesktop ? mousePosition.x * -30 : 0}px, ${isDesktop ? mousePosition.y * -30 : 0}px)`
              }}
            />
            <div 
              className="absolute top-1/2 right-1/3 w-48 h-48 border border-white/15 transition-transform duration-700 ease-out"
              style={{
                transform: `rotate(${scrollY * 0.2 + (isDesktop ? mousePosition.x * 15 : 0)}deg) translate(${isDesktop ? mousePosition.x * 40 : 0}px, ${isDesktop ? mousePosition.y * 25 : 0}px)`
              }}
            />
            
            {/* Additional interactive elements for desktop */}
            {isDesktop && (
              <>
                <div 
                  className="absolute top-1/3 right-1/2 w-32 h-32 border border-white/10 rounded-full transition-transform duration-300 ease-out"
                  style={{
                    transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) scale(${1 + mousePosition.x * 0.1})`
                  }}
                />
                <div 
                  className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-white/15 transition-transform duration-500 ease-out"
                  style={{
                    transform: `rotate(${mousePosition.x * 45}deg) translate(${mousePosition.x * -35}px, ${mousePosition.y * -35}px)`
                  }}
                />
              </>
            )}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div 
            className="inline-block mb-6 px-6 py-2 border-2 border-white/40 rounded-full backdrop-blur-sm transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.3, 50)}px) ${isDesktop ? `translate(${mousePosition.x * 10}px, ${mousePosition.y * 5}px)` : ''}`,
              opacity: Math.max(1 - scrollY * 0.002, 0)
            }}
          >
            <span className="text-white text-sm sm:text-base tracking-widest uppercase">Where Artistry Meets Purpose</span>
          </div>
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight transition-transform duration-200 ease-out"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.2, 30)}px) ${isDesktop ? `translate(${mousePosition.x * 5}px, ${mousePosition.y * 3}px)` : ''}`,
              opacity: Math.max(1 - scrollY * 0.0015, 0)
            }}
          >
            Our Vision
          </h1>
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.15, 20)}px) ${isDesktop ? `translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)` : ''}`,
              opacity: Math.max(1 - scrollY * 0.001, 0)
            }}
          >
            Crafting moments of beauty and meaning through timeless artistry. We envision a world where handcrafted elegance enriches every celebration, space, and connection.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Vision Segments - Card Style */}
      <section className="py-20 sm:py-28 bg-linear-to-b from-[#FAF8F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5C4A3A] mb-4">
              Our Journey Across Industries
            </h2>
            <div className="w-24 h-1 bg-[#8B1538] mx-auto rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {visionSegments.map((segment, index) => (
              <div 
                key={index}
                className={`group relative ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}
                style={{
                  transform: `translateY(${Math.max(0, scrollY - (800 + index * 400)) * 0.1}px)`
                }}
              >
                <div className={`${segment.bgColor} rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image Side */}
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <div className="aspect-4/3 lg:aspect-auto lg:h-full relative">
                        <Image
                          src={segment.image}
                          alt={segment.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent to-${segment.bgColor}/20`} />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
                      {/* Number Badge */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${segment.accentColor} rounded-full mb-6`}>
                        <span className={`text-xl sm:text-2xl font-bold ${segment.bgColor === 'bg-[#8B6F47]' ? 'text-[#5C4A3A]' : segment.textColor === 'text-white' ? 'text-white' : 'text-white'}`}>
                          {index + 1}
                        </span>
                      </div>

                      <h3 className={`text-2xl sm:text-3xl lg:text-5xl font-bold ${segment.textColor} mb-4 sm:mb-6 group-hover:tracking-wide transition-all duration-300`}>
                        {segment.title}
                      </h3>
                      
                      <p className={`text-sm sm:text-base lg:text-xl ${segment.textColor} opacity-80 leading-relaxed mb-4 sm:mb-6`}>
                        {segment.description}
                      </p>

                      {/* Decorative Line */}
                      <div className={`w-20 h-1 ${segment.accentColor} rounded-full group-hover:w-32 transition-all duration-500`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request Section with Mouse Interaction */}
      <section 
        className="relative py-20 sm:py-28 overflow-hidden"
        onMouseMove={handleCtaMouseMove}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#8B1538] via-[#6B0F2A] to-[#5C4A3A]">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          />
        </div>

        {/* Interactive floating elements */}
        {isDesktop && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-white/20 rounded-full transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${ctaMousePosition.x * 60}px, ${ctaMousePosition.y * 60}px) rotate(${ctaMousePosition.x * 30}deg)`
              }}
            />
            <div 
              className="absolute top-1/3 right-1/4 w-32 h-32 border border-white/15 transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${ctaMousePosition.x * -50}px, ${ctaMousePosition.y * -50}px) rotate(${ctaMousePosition.x * -45}deg)`
              }}
            />
            <div 
              className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-white/10 rounded-full transition-transform duration-400 ease-out"
              style={{
                transform: `translate(${ctaMousePosition.x * 80}px, ${ctaMousePosition.y * -40}px) scale(${1 + ctaMousePosition.x * 0.2})`
              }}
            />
            <div 
              className="absolute bottom-1/3 right-1/3 w-56 h-56 border border-white/10 rounded-full transition-transform duration-600 ease-out"
              style={{
                transform: `translate(${ctaMousePosition.x * -70}px, ${ctaMousePosition.y * 70}px) rotate(${ctaMousePosition.y * 60}deg)`
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/20 transition-transform duration-350 ease-out"
              style={{
                transform: `translate(${ctaMousePosition.x * 100}px, ${ctaMousePosition.y * 100}px) rotate(${ctaMousePosition.x * 90}deg)`
              }}
            />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon with mouse interaction */}
          <div 
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8 border-2 border-white/20 transition-transform duration-300 ease-out"
            style={{
              transform: isDesktop ? `translate(${ctaMousePosition.x * 15}px, ${ctaMousePosition.y * 15}px) rotate(${ctaMousePosition.x * 10}deg)` : ''
            }}
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <h3 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-transform duration-200 ease-out"
            style={{
              transform: isDesktop ? `translate(${ctaMousePosition.x * 8}px, ${ctaMousePosition.y * 5}px)` : ''
            }}
          >
            Have Something Specific in Mind?
          </h3>
          
          <p 
            className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light transition-transform duration-300 ease-out"
            style={{
              transform: isDesktop ? `translate(${ctaMousePosition.x * 12}px, ${ctaMousePosition.y * 8}px)` : ''
            }}
          >
            We welcome custom requests and collaborations. Whether it's a unique design or a bulk order for an event, let's talk about how we can help.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#8B1538] px-10 sm:px-14 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group border-4 border-white/20"
          >
            Get in Touch
            <svg 
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Decorative elements with mouse interaction */}
          <div className="mt-16 flex justify-center gap-2">
            <div 
              className="w-2 h-2 bg-white/40 rounded-full animate-pulse transition-transform duration-200 ease-out"
              style={{
                transform: isDesktop ? `translate(${ctaMousePosition.x * 5}px, ${ctaMousePosition.y * 5}px)` : ''
              }}
            />
            <div 
              className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-100 transition-transform duration-300 ease-out"
              style={{
                transform: isDesktop ? `translate(${ctaMousePosition.x * 8}px, ${ctaMousePosition.y * 8}px)` : ''
              }}
            />
            <div 
              className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-200 transition-transform duration-400 ease-out"
              style={{
                transform: isDesktop ? `translate(${ctaMousePosition.x * 10}px, ${ctaMousePosition.y * 10}px)` : ''
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}