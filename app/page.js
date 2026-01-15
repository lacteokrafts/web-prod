'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Fade starts immediately - fully gone by 300px scroll
  const opacity = Math.max(0, 1 - scrollY / 300)
  const translateY = -scrollY * 0.3

  // WhatsApp link
  const whatsappNumber = '919593525463'
  const whatsappMessage = encodeURIComponent('Hello! I would like to place an order.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="-mt-20">
      {/* Hero Section - Premium Welcome */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/a.png')" }}
      >
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
        
        {/* Animated grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        
        <div 
          className="text-center max-w-5xl relative z-10"
          style={{ 
            opacity,
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        >
          {/* Premium tagline */}
          <div className="mb-6 inline-block">
            <span className="text-sm sm:text-base font-semibold text-[#D4C4A8] tracking-[0.3em] uppercase">
              Handcrafted Excellence
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 px-4 leading-tight"
              style={{ 
                textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(212,196,168,0.2)',
                letterSpacing: '0.02em'
              }}>
            Welcome to<br />
            <span className="text-[#D4C4A8]">LacteoKrafts</span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-linear-to-r from-transparent via-white/40 to-transparent w-32" />
            <div className="mx-4 relative">
              <div className="w-2 h-2 bg-white/60 rounded-full" />
              <div className="absolute inset-0 w-2 h-2 bg-white/30 rounded-full animate-ping" />
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-white/40 to-transparent w-32" />
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed px-4 mb-12 font-light max-w-2xl mx-auto"
             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Where tradition meets innovation in every handcrafted piece
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Link 
              href="/products"
              className="group relative w-full sm:w-auto bg-white text-[#8B1538] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Our Catalogue
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-[#8B1538] to-[#6D1029] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500 z-20">
                Explore Our Catalogue
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto bg-[#D4C4A8] text-[#8B1538] border-2 border-[#D4C4A8] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-[#D4C4A8]/20 transition-all duration-500 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10">Contact to Order</span>
              <div className="absolute inset-0 bg-[#8B1538] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500 z-20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact to Order
              </span>
            </a>
          </div>

          
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-28 bg-linear-to-b from-white to-[#FAF8F5]" id="why" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">Why Choose Us</span>
              <div className="h-px bg-linear-to-r from-transparent via-[#8B1538] to-transparent mt-2" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#5C4A3A] mb-6">
              Crafted with Purpose
            </h2>
            <p className="text-[#8B6F47] text-lg max-w-2xl mx-auto">
              Every piece tells a story of dedication, innovation, and sustainable craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Premium Quality",
                description: "Meticulously crafted using natural, sustainable materials for lasting beauty"
              },
              {
                icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                title: "Unique Designs",
                description: "Each piece is one-of-a-kind, reflecting individuality and artistic expression"
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Eco-Conscious",
                description: "Committed to sustainability with biobased, environmentally friendly materials"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#E8DCC8]/50"
                style={{
                  animation: isVisible['why'] ? `fadeInUp 0.8s ease-out ${index * 0.2}s backwards` : 'none'
                }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#8B1538] to-[#6D1029] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#5C4A3A] mb-4 group-hover:text-[#8B1538] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#8B6F47] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]" id="collections" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">Collections</span>
              <div className="h-px bg-linear-to-r from-transparent via-[#8B1538] to-transparent mt-2" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#5C4A3A] mb-6">
              Discover Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Artisan Collection", desc: "Handcrafted treasures with timeless appeal", image: "/products/pendent4.png" },
              { title: "Modern Fusion", desc: "Contemporary elegance meets traditional craft", image: "/earings6.png" }
            ].map((collection, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{
                  animation: isVisible['collections'] ? `fadeInUp 0.8s ease-out ${index * 0.2}s backwards` : 'none'
                }}
              >
                <Image
                  src={collection.image}
                  alt={`${collection.title} handcrafted ornaments by Lacteo Krafts`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transit  ion-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-white/90 mb-4">{collection.desc}</p>
                  <Link href="/products" className="inline-flex items-center gap-2 text-[#D4C4A8] hover:gap-4 transition-all">
                    View Collection
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-[#8B1538] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#6D1029] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-linear-to-br from-[#8B1538] via-[#9B2548] to-[#7D1230] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Own Something Special?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Explore handcrafted pieces that bring joy and tell your unique story
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/products"
              className="bg-white text-[#8B1538] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#FAF8F5] hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-[#8B1538] hover:scale-105 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}