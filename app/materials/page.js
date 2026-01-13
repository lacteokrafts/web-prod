'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Materials() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
        }
      })
    }, observerOptions)
    
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#F5EFE7] -mt-20">
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 lg:pb-24 bg-[#E8DCC8] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A66B]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#D4C4A8]/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#8B1538]/10 backdrop-blur-sm border border-[#8B1538]/20 rounded-full px-5 py-2.5 mb-6 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-[#8B1538] animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#8B1538]">
                The Material
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D2E1F] mb-6 md:mb-8 leading-tight tracking-tight">
              A Distinct Material Story
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#5C4A3A] leading-relaxed max-w-3xl mx-auto font-light">
              Our pieces are crafted from a naturally derived material that offers unique aesthetic qualities — warm tones, organic texture, and a smooth finish that feels distinct to the touch.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Origin Section */}
      <section 
        id="origin" 
        data-animate
        className="py-16 md:py-20 lg:py-28 bg-[#F9F6F1] relative"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEMUM0QTgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center transition-all duration-1000 ${isVisible.origin ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-6 bg-[#C9A66B]/20 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#D4C4A8]/50 hover:ring-[#C9A66B]/60 transition-all duration-500">
                <Image 
                  src="/a.png" 
                  alt="Material texture showcasing natural origins" 
                  width={600}
                  height={750}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative corner element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#8B1538]/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4 bg-[#C9A66B]/10 backdrop-blur-sm border border-[#C9A66B]/20 rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-[#8B6F47] tracking-wider uppercase">Origin & Craft</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D2E1F] mb-6 md:mb-8 leading-tight tracking-tight">
                Natural Origin,<br />Refined Finish
              </h2>
              <div className="space-y-6 text-[#5C4A3A] text-base md:text-lg leading-relaxed">
                <p className="text-lg md:text-xl font-light text-[#4A3D2E]">
                  The material we work with is derived from natural sources. Through a careful processing and curing method, it transforms into a workable medium that can be shaped, carved, and finished to a high standard.
                </p>
                <p className="text-[#5C4A3A]">
                  What makes it interesting is its inherent texture — no two pieces are exactly alike. The organic variations add character while the processing ensures consistency in quality and durability.
                </p>
                <p className="text-[#5C4A3A]">
                  It's not about the material being "eco-friendly" or "sustainable" in the marketing sense — it's simply a good material for decorative work, with its own story and limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section 
        id="applications" 
        data-animate
        className="py-16 md:py-20 lg:py-28 bg-[#E8DCC8] relative overflow-hidden"
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A66B]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-1000 delay-200 ${isVisible.applications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12 md:mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
              <div className="inline-block mb-4 bg-[#8B1538]/10 backdrop-blur-sm border border-[#8B1538]/20 rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-[#8B1538] tracking-wider uppercase">Applications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D2E1F] mb-6 tracking-tight">
                What It's Made For
              </h2>
              <p className="text-[#5C4A3A] text-lg md:text-xl leading-relaxed font-light">
                Our material works beautifully for certain applications, and we're honest about where it doesn't.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
              {/* Well Suited For */}
              <div className="group bg-[#F9F6F1] rounded-3xl p-8 md:p-10 lg:p-12 border-2 border-[#D4C4A8] shadow-2xl hover:shadow-[0_20px_60px_rgba(139,21,56,0.15)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B1538]/5 rounded-full blur-3xl transform translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C9A66B]/10 rounded-full blur-2xl transform -translate-x-8 translate-y-8"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-[#8B1538] text-white flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#3D2E1F]">
                      Well Suited For
                    </h3>
                  </div>
                  <ul className="space-y-5">
                    {[
                      'Decorative ornaments and wall pieces',
                      'Desktop accessories and figurines',
                      'Gift items and mementos',
                      'Award trophies and recognition pieces',
                      'Low-load sculptural forms'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <div className="w-7 h-7 rounded-xl bg-[#8B1538]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#8B1538]/20 transition-colors shadow-sm">
                          <svg className="w-4 h-4 text-[#8B1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#4A3D2E] text-base md:text-lg leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Limitations */}
              <div className="group bg-[#F9F6F1] rounded-3xl p-8 md:p-10 lg:p-12 border-2 border-[#C9A66B] shadow-2xl hover:shadow-[0_20px_60px_rgba(139,111,71,0.15)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B6F47]/5 rounded-full blur-3xl transform translate-x-12 -translate-y-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4C4A8]/20 rounded-full blur-2xl transform -translate-x-8 translate-y-8"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-[#8B6F47] text-white flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#3D2E1F]">
                      Limitations
                    </h3>
                  </div>
                  <ul className="space-y-5">
                    {[
                      'Heavy load-bearing applications',
                      'Outdoor exposure without protection',
                      'Food contact or liquid storage',
                      'High-friction or abrasive use'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <div className="w-7 h-7 rounded-xl bg-[#8B6F47]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#8B6F47]/20 transition-colors shadow-sm">
                          <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-[#4A3D2E] text-base md:text-lg leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process" 
        data-animate
        className="py-16 md:py-20 lg:py-28 bg-[#F5EFE7] relative"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUE2NkIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center transition-all duration-1000 delay-300 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="inline-block mb-4 bg-[#8B1538]/10 backdrop-blur-sm border border-[#8B1538]/20 rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-[#8B1538] tracking-wider uppercase">Our Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D2E1F] mb-6 md:mb-8 leading-tight tracking-tight">
                From Raw<br />to Refined
              </h2>
              <div className="space-y-6 text-[#5C4A3A] text-base md:text-lg leading-relaxed">
                <p className="text-lg md:text-xl font-light text-[#4A3D2E]">
                  Each piece goes through several stages: sourcing, preparation, shaping, curing, and finishing. The process is hands-on throughout, which is why we work in small batches.
                </p>
                <p className="text-[#5C4A3A]">
                  The finishing stage is where the material really comes alive — polishing and surface treatment bring out its natural warmth and create the smooth, gift-worthy quality we aim for.
                </p>
                <p className="text-[#5C4A3A]">
                  We're continuously learning and refining our techniques. Some experiments work, others don't. That's part of working with natural materials.
                </p>
              </div>
              <Link 
                href="/products"
                className="inline-flex items-center gap-3 mt-8 md:mt-10 bg-[#8B1538] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg hover:bg-[#6B0F2A] transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_rgba(139,21,56,0.3)] hover:scale-105 group"
              >
                See the Results
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[#C9A66B]/20 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#C9A66B]/50 hover:ring-[#8B6F47]/60 transition-all duration-500">
                <Image 
                  src="/a.png" 
                  alt="Collection of finished pieces" 
                  width={600}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#8B1538]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block mb-4 bg-[#C9A66B]/10 backdrop-blur-sm border border-[#C9A66B]/20 rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-[#8B6F47] tracking-wider uppercase">Step by Step</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D2E1F] tracking-tight">
              Our Craft Process
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {[
              { step: '01', title: 'Sourcing', desc: 'Carefully selecting natural materials from trusted sources', color: 'from-[#8B1538] to-[#6B0F2A]' },
              { step: '02', title: 'Preparation', desc: 'Processing raw materials into workable form', color: 'from-[#8B6F47] to-[#6B5537]' },
              { step: '03', title: 'Shaping', desc: 'Hand-crafting each piece with precision', color: 'from-[#C9A66B] to-[#B8955B]' },
              { step: '04', title: 'Curing', desc: 'Allowing materials to set and strengthen', color: 'from-[#D4C4A8] to-[#C4B498]' },
              { step: '05', title: 'Finishing', desc: 'Polishing and perfecting the final product', color: 'from-[#8B1538] to-[#6B0F2A]' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-5 md:mb-6">
                  <div className="absolute inset-0 bg-[#8B1538]/20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-[#8B1538] text-white flex items-center justify-center text-lg md:text-2xl font-bold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#3D2E1F] mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5C4A3A] text-xs md:text-sm leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Showcase Gallery */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#F9F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block mb-4 bg-[#8B1538]/10 backdrop-blur-sm border border-[#8B1538]/20 rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-[#8B1538] tracking-wider uppercase">Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D2E1F] tracking-tight">
              Material Showcase
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ring-2 ring-[#D4C4A8]/30 hover:ring-[#C9A66B]/50">
                <Image 
                  src="/a.png" 
                  alt={`Material showcase ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-from-transparent to-[#3D2E1F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#3D2E1F] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B1538]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A66B]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#D4C4A8]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5EFE7] mb-6 md:mb-8 tracking-tight">
            Explore Our Collection
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#E8DCC8]/90 mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            See how our unique material transforms into beautiful, handcrafted pieces that tell their own stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
            <Link 
              href="/products"
              className="group bg-[#D4C4A8] text-[#3D2E1F] px-10 md:px-12 py-5 md:py-6 rounded-full font-semibold text-base md:text-lg hover:bg-[#C9A66B] transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              View Products
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/about"
              className="bg-transparent border-2 border-[#D4C4A8] text-[#D4C4A8] px-10 md:px-12 py-5 md:py-6 rounded-full font-semibold text-base md:text-lg hover:bg-[#D4C4A8] hover:text-[#3D2E1F] transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}