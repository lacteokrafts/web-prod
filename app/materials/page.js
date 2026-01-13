export default function Materials() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#F5F0E8] to-[#E8DCC8] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2E1F] mb-4">
            Our Materials
          </h1>
          <p className="text-lg md:text-xl text-[#5C4A3A] max-w-3xl mx-auto">
            Quality ingredients and sustainable materials that make our dairy products exceptional
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-2 border-dashed border-[#B8A888]">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-[#D4C4A8] rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-[#8B1538]" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#3D2E1F]">
              Coming Soon
            </h2>
            
            <p className="text-[#5C4A3A] text-lg max-w-2xl mx-auto">
              We're crafting a detailed overview of the premium materials and ingredients 
              that go into every LacteoKrafts product. Stay tuned for information about 
              our sourcing, quality standards, and commitment to excellence.
            </p>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-[#F5F0E8] rounded-lg">
                <h3 className="font-semibold text-[#8B1538] mb-2">Premium Ingredients</h3>
                <p className="text-sm text-[#5C4A3A]">Sourced from the finest suppliers</p>
              </div>
              <div className="p-6 bg-[#F5F0E8] rounded-lg">
                <h3 className="font-semibold text-[#8B1538] mb-2">Sustainable Practices</h3>
                <p className="text-sm text-[#5C4A3A]">Environmentally responsible sourcing</p>
              </div>
              <div className="p-6 bg-[#F5F0E8] rounded-lg">
                <h3 className="font-semibold text-[#8B1538] mb-2">Quality Assured</h3>
                <p className="text-sm text-[#5C4A3A]">Rigorous testing and standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}