'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#D4C4A8] border-b border-[#B8A888] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/vercel.svg" 
              alt="LacteoKrafts Logo" 
              width={100} 
              height={25}
              className="h-6 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            href="/" 
            className={`transition-colors font-medium ${
              pathname === '/' 
                ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538]' 
                : 'text-[#3D2E1F] hover:text-[#5C4A3A]'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors font-medium ${
              pathname === '/about' 
                ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538]' 
                : 'text-[#3D2E1F] hover:text-[#5C4A3A]'
            }`}
          >
            About
          </Link>
          <Link 
            href="/vision" 
            className={`transition-colors font-medium ${
              pathname === '/vision' 
                ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538]' 
                : 'text-[#3D2E1F] hover:text-[#5C4A3A]'
            }`}
          >
            Vision
          </Link>
          <Link 
            href="/products" 
            className={`transition-colors font-medium ${
              pathname === '/products' 
                ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538]' 
                : 'text-[#3D2E1F] hover:text-[#5C4A3A]'
            }`}
          >
            Products
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors font-medium ${
              pathname === '/contact' 
                ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538]' 
                : 'text-[#3D2E1F] hover:text-[#5C4A3A]'
            }`}
          >
            Contact
          </Link>
        </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3D2E1F] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              href="/" 
              className="block text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/vision" 
              className="block text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Vision
            </Link>
            <Link 
              href="/products" 
              className="block text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className="block text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}