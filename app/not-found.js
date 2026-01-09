import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] -mt-20">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-[#E8DCC8]">404</h1>
        <h2 className="text-3xl font-semibold text-[#5C4A3A] mt-4">
          Page Not Found
        </h2>
        <p className="text-[#8B6F47] mt-4 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#8B6F47] text-white px-8 py-3 rounded-lg hover:bg-[#5C4A3A] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}