import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ReactLenis from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Skills from './sections/Skills'
import Work from './sections/Works'
import Contact from './sections/Contact'
import ServiceSummary from './sections/ServiceSummary'
const App = () => {
  const CursorRef = useRef(null);
  useEffect(()=>{
    const Cursr = CursorRef.current;
        const CustomCursor = (e) => {
       gsap.to(CursorRef.current, {
        left: e.clientX - 10 + "px",
        top: e.clientY - 5 + "px",
        duration: 0.5,
      });
    };
    document.addEventListener("mousemove", CustomCursor);
    

    return ()=> document.addEventListener("mouseleave", CustomCursor);
  },[]);
  return (
    <ReactLenis root className='w-screen h-screen overflow-x-hidden'>
      <div
        ref={CursorRef}
        className="fixed h-4 w-4 rounded-full z-[30] pointer-events-none hidden md:block bg-DarkLava"
      >
      </div>
      <Navbar/>
      <Hero/> 
      <ServiceSummary/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
    </ReactLenis>
  )
}

export default App