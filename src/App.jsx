import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
