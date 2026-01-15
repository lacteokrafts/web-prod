'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
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

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section with Luxurious Effects */}
      <section className="relative bg-linear-to-br from-[#8B1538] via-[#9B2548] to-[#7D1230] text-white overflow-hidden -mt-20 pt-32 pb-24">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(212,196,168,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(212,196,168,0.2) 0%, transparent 50%)
              `,
              animation: 'meshMove 15s ease-in-out infinite'
            }}
          />
        </div>

        {/* Elegant shimmer sweep */}
        <div className="hidden lg:block absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 55%, transparent 70%)',
              animation: 'shimmer 6s ease-in-out infinite',
              backgroundSize: '200% 100%'
            }}
          />
        </div>

        {/* Premium grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated entrance for title */}
            <div className="overflow-hidden mb-8">
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{
                  animation: 'slideUp 1s ease-out',
                  textShadow: '0 4px 30px rgba(0,0,0,0.3), 0 0 80px rgba(212,196,168,0.1)'
                }}
              >
                About Lacteo Krafts
              </h1>
            </div>
            
            {/* Refined decorative divider */}
            <div className="flex items-center justify-center mb-8" style={{ animation: 'fadeIn 1.5s ease-out' }}>
              <div className="h-px bg-linear-to-r from-transparent via-white/40 to-transparent w-24" />
              <div className="mx-4 relative">
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-white/30 rounded-full animate-ping" />
              </div>
              <div className="h-px bg-linear-to-r from-transparent via-white/40 to-transparent w-24" />
            </div>
            
            <p 
              className="text-xl sm:text-2xl opacity-95 leading-relaxed font-light"
              style={{ animation: 'slideUp 1s ease-out 0.2s backwards' }}
            >
              Discover the story behind pieces that feel truly special.
            </p>
          </div>
        </div>
        
        {/* Sophisticated corner ornaments with glow */}
        <div className="absolute top-8 left-8 w-24 h-24">
          <div className="absolute inset-0 border-l border-t border-white/30" />
          <div className="absolute top-0 left-0 w-3 h-px bg-white/50" />
          <div className="absolute top-0 left-0 w-px h-3 bg-white/50" />
        </div>
        <div className="absolute top-8 right-8 w-24 h-24">
          <div className="absolute inset-0 border-r border-t border-white/30" />
          <div className="absolute top-0 right-0 w-3 h-px bg-white/50" />
          <div className="absolute top-0 right-0 w-px h-3 bg-white/50" />
        </div>
        <div className="absolute bottom-8 left-8 w-24 h-24">
          <div className="absolute inset-0 border-l border-b border-white/30" />
          <div className="absolute bottom-0 left-0 w-3 h-px bg-white/50" />
          <div className="absolute bottom-0 left-0 w-px h-3 bg-white/50" />
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24">
          <div className="absolute inset-0 border-r border-b border-white/30" />
          <div className="absolute bottom-0 right-0 w-3 h-px bg-white/50" />
          <div className="absolute bottom-0 right-0 w-px h-3 bg-white/50" />
        </div>

        {/* Ambient floating particles */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${4 + i * 2}px`,
                height: `${4 + i * 2}px`,
                left: `${15 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
      </section>

      {/* Our Story Section with Scroll Animation */}
      <section className="py-20 sm:py-28" id="story" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div 
              className="order-2 lg:order-1 transition-all duration-1000"
              style={{
                opacity: isVisible['story'] ? 1 : 0,
                transform: isVisible['story'] ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-linear-to-br from-[#8B1538]/10 to-transparent z-10" />
                <Image
                  src="about/ab1.png"
                  alt="Crafting Process"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Decorative frame corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50" />
              </div>
            </div>
            
            <div 
              className="order-1 lg:order-2 transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible['story'] ? 1 : 0,
                transform: isVisible['story'] ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">Our Story</span>
                <div className="h-px bg-linear-to-r from-[#8B1538] to-transparent mt-2 w-20" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#5C4A3A] mb-6 leading-tight">
                A Thoughtful Path
              </h2>
              <div className="space-y-5 text-[#8B6F47] text-lg leading-relaxed">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-[#8B1538] before:to-transparent">
                  At Lacteo Krafts, we set out to bring more meaning, beauty, and responsibility to the everyday ornaments, gifts, and accessories you love.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-[#8B1538] before:to-transparent">
                  In a world filled with mass-produced plastic and resin, we chose a more thoughtful path — one that celebrates natural origins, intentional design, and genuine craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-20 sm:py-28 bg-white" id="journey" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div 
              className="transition-all duration-1000"
              style={{
                opacity: isVisible['journey'] ? 1 : 0,
                transform: isVisible['journey'] ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">The Journey</span>
                <div className="h-px bg-linear-to-r from-[#8B1538] to-transparent mt-2 w-20" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#5C4A3A] mb-6 leading-tight">
                From Experiment to Excellence
              </h2>
              <div className="space-y-5 text-[#8B6F47] text-lg leading-relaxed">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-[#8B6F47] before:to-transparent">
                  Our journey started with curious hands-on experiments: transforming milk-derived components into a unique, naturally derived material.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-[#8B6F47] before:to-transparent">
                  Through countless tests, refinements, and real conversations with customers, we perfected a versatile biobased material that can be molded, finished, painted, and shaped into elegant, lightweight pieces.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-[#8B6F47] before:to-transparent">
                  From delicate earrings and festive ornaments to cherished mementos and decorative keepsakes — each piece tells a story.
                </p>
              </div>
            </div>
            
            <div 
              className="transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible['journey'] ? 1 : 0,
                transform: isVisible['journey'] ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-linear-to-br from-[#8B6F47]/10 to-transparent z-10" />
                <Image
                  src="about/ab2.png"
                  alt="Our Products"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-20 sm:py-28 bg-linear-to-b from-[#FAF8F5] to-[#E8DCC8]" id="special" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">What Makes Us Different</span>
              <div className="h-px bg-linear-to-r from-transparent via-[#8B1538] to-transparent mt-2" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#5C4A3A] mb-6">
              Design Meets Craftsmanship
            </h2>
            <p className="text-[#8B6F47] text-lg leading-relaxed">
              What makes Lacteo Krafts stand out isn't just the material — it's how design meets craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                title: "Handcrafted Character",
                description: "Every piece receives careful attention to form, texture, and finish, resulting in subtle variations and distinctive tactile surfaces.",
                color: "bg-[#8B1538]"
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Natural Origins",
                description: "Our unique biobased material transforms milk-derived components into elegant, sustainable pieces unlike anything conventional.",
                color: "bg-[#8B6F47]"
              },
              {
                icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
                title: "Lightweight Elegance",
                description: "Each piece feels effortless to wear or display, combining beauty with a distinctive, comfortable feel.",
                color: "bg-[#D4C4A8]"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#E8DCC8]/50"
                style={{
                  animation: isVisible['special'] ? `fadeInUp 0.8s ease-out ${index * 0.2}s backwards` : 'none'
                }}
              >
                <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <svg className={`w-10 h-10 ${feature.color === 'bg-[#D4C4A8]' ? 'text-[#5C4A3A]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Community Story Section */}
      <section className="py-20 sm:py-28 bg-linear-to-br from-[#8B6F47] to-[#7A5E3A] text-white" id="community" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div 
              className="transition-all duration-1000"
              style={{
                opacity: isVisible['community'] ? 1 : 0,
                transform: isVisible['community'] ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="about/ab3.png"
                  alt="Community Events"
                  width={700}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/70" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/70" />
              </div>
            </div>
            
            <div 
              className="transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible['community'] ? 1 : 0,
                transform: isVisible['community'] ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-[#D4C4A8] tracking-widest uppercase">Community</span>
                <div className="h-px bg-linear-to-r from-[#D4C4A8] to-transparent mt-2 w-20" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                From Markets to Hearts
              </h2>
              <div className="space-y-5 text-lg leading-relaxed opacity-95">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-white/60 before:to-transparent">
                  We first shared our creations at college fests and local markets, where people could touch, wear, and experience them firsthand.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-white/60 before:to-transparent">
                  The warm response — admiring glances, excited purchases, and repeat customers — confirmed what we believed: there's a real desire for thoughtful, unique alternatives that tell a better story.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-linear-to-b before:from-white/60 before:to-transparent">
                  Today, Lacteo Krafts keeps evolving through fresh designs, material innovation, and the voices of our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">Our Commitment</span>
            <div className="h-px bg-linear-to-r from-transparent via-[#8B1538] to-transparent mt-2" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5C4A3A] mb-8">
            Our Promise
          </h2>
          <p className="text-[#8B6F47] text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
            To craft beautiful, one-of-a-kind ornaments, gifts, and decorative pieces that bring joy, spark conversations, and feel good to own and share — all rooted in a material approach as considered as the artistry itself.
          </p>

          {/* Premium CTA Card */}
          <div className="relative bg-linear-to-br from-[#FAF8F5] to-[#E8DCC8] rounded-3xl p-10 sm:p-14 border-2 border-[#D4C4A8] shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-[#8B1538]/5 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-[#8B1538]/5 to-transparent rounded-tl-full" />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#5C4A3A] mb-4">
                Handcrafted Ornaments & Keepsakes That Feel Different
              </h3>
              <p className="text-[#8B6F47] text-lg mb-10">
                Ready to find the piece that stands out?
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/products"
                  className="group relative bg-[#8B1538] text-white px-12 py-5 rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10">Explore the Collection</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#8B1538] to-[#6D1029] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link
                  href="/contact"
                  className="group relative bg-white text-[#8B1538] border-2 border-[#8B1538] px-12 py-5 rounded-full font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get in Touch</span>
                  <div className="absolute inset-0 bg-[#8B1538] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes meshMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

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