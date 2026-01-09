import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#D4C4A8] border-b border-[#B8A888] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo apatoto varcel ache pore asol dile add kore debo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/vercel.svg" 
              alt="LacteoKrafts Logo" 
              width={120} 
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/vision" 
              className="text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium"
            >
              Vision
            </Link>
            <Link 
              href="/products" 
              className="text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className="text-[#3D2E1F] hover:text-[#5C4A3A] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}