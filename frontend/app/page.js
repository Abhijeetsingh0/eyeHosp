// pages/index.js (Landing Page for Eye Hospital)

import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 py-16 md:py-24 bg-slate-700 space-y-8 md:space-y-0 md:space-x-12">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-50">Drishti Niketan</h1>
          <p className="mt-4 text-lg text-slate-50">Your trusted partner in eye care for a brighter tomorrow.</p>
          <a href="#services" className="mt-8 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg transition duration-300">Get Started</a>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
            src="/eye.jpg" 
            alt="Eye Care" 
            width={600} 
            height={400} 
            layout="intrinsic" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center bg-slate-600">
        <h2 className="text-3xl font-semibold text-white">About Us</h2>
        <p className="mt-4 text-lg text-slate-50 max-w-4xl mx-auto">
          At our state-of-the-art eye hospital, we offer world-class treatments for all your eye health needs. 
          From routine check-ups to advanced surgeries, our experienced specialists are here to help you see your best.
        </p>
        <a href="#contact" className="mt-8 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg transition duration-300">Contact Us</a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-slate-700">
        <h2 className="text-3xl font-semibold text-slate-50 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          <div className="p-8 bg-slate-600 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-white">Comprehensive Eye Exams</h3>
            <p className="mt-4 text-slate-50">Regular check-ups for detecting vision problems early.</p>
          </div>
          <div className="p-8 bg-slate-600 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-white">Cataract Surgery</h3>
            <p className="mt-4 text-slate-50">Advanced surgical solutions to restore your sight.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">What Our Patients Say</h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-6">
          <div className="max-w-xs p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <p className="italic text-gray-600">"The best experience I've had with an eye doctor. The team is incredibly caring, and I can see perfectly now!"</p>
            <span className="block mt-4 font-semibold text-blue-600">- John D.</span>
          </div>
          <div className="max-w-xs p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <p className="italic text-gray-600">"I had LASIK here, and it completely changed my life. Highly recommend to anyone thinking about it!"</p>
            <span className="block mt-4 font-semibold text-blue-600">- Emily R.</span>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="py-6 px-6 bg-slate-800 text-white text-center">
        <p>© 2024 EyeCare Hospital | All Rights Reserved</p>
        <p className="mt-4 inline-block px-6 py-3 text-white bg-slate-600 hover:bg-slate-800 rounded-md text-lg transition duration-300">Contact Us: 9111057997</p>
      </footer>
    </div>
  )
}
