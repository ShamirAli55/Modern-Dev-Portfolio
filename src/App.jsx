import React from 'react'
import HeroSection from './pages/HeroSection'
import VideoSection from './pages/VideoSection'
import AboutSection from './pages/AboutSection'
const App = () => {
  return (
    <div className='bg-[#EFEAE3] overflow-x-hidden'>
      <HeroSection />
      <VideoSection/>
      <AboutSection/>
    </div>
  )
}

export default App