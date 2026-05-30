import React from 'react'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProductsSection from "./sections/ProductsSection"

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductsSection />
      <Footer />
    </div>
  )
}
