'use client'
import { useState, useEffect } from 'react'
import { MessageCircle, Mail, Send, Clock, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

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

  const handleWhatsAppClick = () => {
    const phoneNumber = '919593525463'
    const customMessage = `Hi! I'm ${name || 'interested in learning more'}. ${message || 'I would like to know more about Lacteo Krafts products.'}`
    const encodedMessage = encodeURIComponent(customMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleEmailClick = () => {
  const subject = encodeURIComponent(`Inquiry from ${name || 'Website Visitor'}`)
  const body = encodeURIComponent(
    message || 'Hi, I would like to know more about Lacteo Krafts products.'
  )

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=lacteokrafts@gmail.com&su=${subject}&body=${body}`

  window.open(gmailUrl, '_blank')
}


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
                Let's Connect
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
              Have questions about our artisanal creations? We'd love to hear from you.
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

      {/* Contact Form Section */}
      <section className="py-20 sm:py-28" id="contact-form" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form Card */}
            <div 
              className="transition-all duration-1000"
              style={{
                opacity: isVisible['contact-form'] ? 1 : 0,
                transform: isVisible['contact-form'] ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-[#E8DCC8]/50">
                <div className="mb-8">
                  <div className="inline-block mb-4">
                    <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">Get in Touch</span>
                    <div className="h-px bg-linear-to-r from-[#8B1538] to-transparent mt-2 w-20" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#5C4A3A] mb-3">Send Us a Message</h2>
                  <p className="text-[#8B6F47] leading-relaxed">Fill in your details and we'll get back to you promptly</p>
                </div>

                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#5C4A3A] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 border-2 border-[#E8DCC8] rounded-2xl focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all bg-[#FAF8F5] text-[#5C4A3A] placeholder-[#8B6F47]/50"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#5C4A3A] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you're looking for..."
                      rows="6"
                      className="w-full px-5 py-4 border-2 border-[#E8DCC8] rounded-2xl focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all resize-none bg-[#FAF8F5] text-[#5C4A3A] placeholder-[#8B6F47]/50"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <button
                      onClick={handleWhatsAppClick}
                      className="group relative bg-[#25D366] text-white px-6 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </span>
                      <div className="absolute inset-0 bg-[#1DA851] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>

                    <button
                      onClick={handleEmailClick}
                      className="group relative bg-[#8B1538] text-white px-6 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        <span>Email Us</span>
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-[#8B1538] to-[#6D1029] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div 
              className="space-y-6 transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible['contact-form'] ? 1 : 0,
                transform: isVisible['contact-form'] ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              {/* Quick Contact Card */}
              <div className="bg-linear-to-br from-[#8B6F47] to-[#7A5E3A] rounded-3xl shadow-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:lacteokrafts@gmail.com" className="text-white/90 hover:text-white transition-colors">
                        lacteokrafts@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <p className="text-white/90">Chat with us instantly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="text-white/90">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#E8DCC8]/50">
                <h3 className="text-2xl font-bold text-[#5C4A3A] mb-6">Why Choose Lacteo Krafts?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Artisanal Quality', desc: 'Handcrafted with traditional methods', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
                    { title: 'Natural Materials', desc: 'Unique biobased creations', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { title: 'Fast Response', desc: 'We typically respond within 24 hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { title: 'Custom Orders', desc: 'Tailored solutions for your needs', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="bg-[#FAF8F5] p-2 rounded-xl group-hover:bg-[#E8DCC8] transition-colors">
                        <svg className="w-5 h-5 text-[#8B1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#5C4A3A]">{item.title}</p>
                        <p className="text-sm text-[#8B6F47]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 sm:py-28 bg-linear-to-b from-[#FAF8F5] to-[#E8DCC8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-linear-to-br from-[#FAF8F5] to-[#E8DCC8] rounded-3xl p-10 sm:p-14 border-2 border-[#D4C4A8] shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-[#8B1538]/5 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-[#8B1538]/5 to-transparent rounded-tl-full" />
            
            <div className="relative z-10 text-center">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-[#8B1538] tracking-widest uppercase">Let's Talk</span>
                <div className="h-px bg-linear-to-r from-transparent via-[#8B1538] to-transparent mt-2" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#5C4A3A] mb-4">
                Ready to Experience Artisanal Excellence?
              </h3>
              <p className="text-[#8B6F47] text-lg mb-10 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust Lacteo Krafts for premium, handcrafted products
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="group relative bg-[#8B1538] text-white px-12 py-5 rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Start a Conversation</span>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#8B1538] to-[#6D1029] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
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
      `}</style>
    </div>
  )
}