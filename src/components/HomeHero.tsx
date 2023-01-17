import React from 'react'
import {motion} from "framer-motion"

type Props = {}

const HomeHero = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row md:space-x-8 pt-14 w-4/5 mx-auto  space-y-16 md:space-y-0 bg-white rounded-b-lg pb-8 md:pb-6 '>

            
            <div className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px] flex items '>
                    <img src="/HeadphoneNavbar.svg" alt="" className='mx-auto' />
                </div>
                <span className='font-semibold tracking-wide '>Headphones</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </div>


            <div className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="/SpeakerNavbar.svg" alt="" className=' mx-auto' />
                </div>
                <span className='font-semibold tracking-wide'>Headphones</span>
                <button className=' font-semibold text-[#979797] tracking-wider'>Shop</button>
            </div>


            <div className='navCard'>
                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="/EarphonesNavbar.svg" alt="" className='mx-auto' />
                </div>
                <span className='font-semibold tracking-wide'>Headphones</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </div>

        </div>
  )
}

export default HomeHero