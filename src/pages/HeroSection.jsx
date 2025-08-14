import React from 'react'
import Button from '../components/Button'

const HeroSection = () => {
  return (
    <section className='h-screen w-full relative z-2'>
        <nav className='flex justify-between items-center px-6 py-8 pl-11 pb-0 h-[15vh]'>
            <img src="/Sundownlogo.svg" alt="logo" />
            <div className='flex gap-5'>
                <Button name={"Work"}/>
                <Button name={"Studio"}/>
                <Button name={"Contact"}/>
            </div>
        </nav>
        <div className='h-[83vh] flex border-b-1 border-[#1511114e] mx-6'>
            <div className='w-1/2 flex items-end pb-14'>
                <h3 className='text-2xl font-bold px-6 w-[70%]'>Sundown is a multi-disciplinary studio focused on creating <br /> unique, end-to-end experiences and environments.</h3>
            </div>
            <div className='w-1/2'>
                <h1 className='text-9xl font-bold text-right px-6 pt-32 leading-[100px]'>SPACES THAT INSPIRE</h1>
            </div>
        </div>
    </section>
  )
}

export default HeroSection