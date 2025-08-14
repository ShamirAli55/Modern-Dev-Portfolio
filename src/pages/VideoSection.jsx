import React from 'react'
import Gooey  from '../components/Gooey'

const VideoSection = () => {
  return (
    <section className='min-h-screen w-full px-6 relative'>
        <Gooey/>
        <video className='rounded-[50px] py-3 z-4 relative'
         src="https://sundown-ivory.vercel.app/video.mp4" autoPlay loop muted></video>
         


    </section>
  )
}

export default VideoSection