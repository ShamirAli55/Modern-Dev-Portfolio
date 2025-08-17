import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ReactLenis from 'lenis/react'

const App = () => {
  return (
    <ReactLenis root className='relative'>
    <Navbar/>
    <Hero/> 
    </ReactLenis>
  )
}

export default App