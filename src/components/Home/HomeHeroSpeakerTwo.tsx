import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HomeHeroSpeakerTwo = (props: Props) => {
  return (
     
     <div className='text-black bg-[url("/HeroSpeaker.svg")] bg-no-repeat bg-[180px_40px] md:bg-right lg:bg-none mt-8 rounded bg-contain h-[400px] w-4/5 mx-auto  bg-[#DEDEDE] flex items-center justify-around  md:pl-16 overflow-hidden  '>
          <div className='space-y-12'>
          <h3 className='font-bold text-2xl md:text-3xl'>ZX7 SPEAKER </h3>
          <div className='flex'>
          <Link to='/Speakers/zx7' className='   px-4 py-2 hover:bg-black hover:text-white transition-all border-slate-700 border-[1px] md:mx-auto'>
            SEE PRODUCT
          </Link>
          </div>
          </div>
          <img src="/HeroSpeaker.svg" alt="Picture of a Speaker" className='hidden lg:block w-[400px]' />
          
       
      </div>
  )
}

export default HomeHeroSpeakerTwo