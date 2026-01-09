export default function Footer() {
  return (
    <footer className="bg-[#D4C4A8] border-t border-[#B8A888] mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-[#3D2E1F] text-sm font-medium">
            © {new Date().getFullYear()} LacteoKrafts. All rights reserved.
          </p>
          <p className="text-[#5C4A3A] text-xs mt-2">
            Crafted with care and passion
          </p>
        </div>
      </div>
    </footer>
  )
}