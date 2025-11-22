import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <IntroSection />
      <WhyChooseUs />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
