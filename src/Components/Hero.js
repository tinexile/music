import React from 'react'
import HeroiMG from '../images/hero_image.png'
const Hero = () => {
  return (

    <>
     <img src={HeroiMG} className=' h-screen object-cover w-full' alt="nhi aaya" />
    <div className='absolute top-[30%] left-[50%] translate-x-[-50%] z-20 text-white text-center grid gap-10' >
        <h1 className='text-5xl font-extrabold ' >myTunes</h1>
        <h3 className='font-extrabold text-3xl' >Your music,movies and TV shows take center stages</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo gravida neque, id euismod tellus pellentesque eu. Ut non tempus</p>
    </div>
    </>
  )
}

export default Hero