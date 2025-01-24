import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Features from './pages/Features'
import Screenshot from './pages/Screenshot'
import Pricing from './pages/Pricing'
import Testimonial from './pages/Testimonial'
import Faq from './components/Faq'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='w-screen overflow-y-scroll h-screen text-white font-kanit bg-gradient-to-br from-blue-400 to-teal-400'>
      <Navbar />
      <Home />
      <Service />
      <Features />
      <Screenshot />
      <Pricing />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default page