import React from 'react'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProductsSection from "./sections/ProductsSection"
import About from "./components/About"
import WhyChooseUs from "./components/WhyChooseUs"

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <WhyChooseUs />
      <ProductsSection />
      <Footer />
    </div>
  )
}
