import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

type Props = {}

const HomeHero = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row md:space-x-8 pt-14 w-4/5 mx-auto  space-y-16 md:space-y-0 bg-white rounded-b-lg pb-8 md:pb-6 '>

            
            <Link to="Headphones" className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px] flex  '>
                    <img src="/HeadphoneNavbar.svg" alt="Picture of a headphone" className='mx-auto' />
                </div>
                <span className='font-semibold tracking-wide '>Headphones</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </Link>


            <Link to="/Speakers" className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="/SpeakerNavbar.svg" alt="Picture of a Speaker" className=' mx-auto' />
                </div>
                <span className='font-semibold tracking-wide'>Speakers</span>
                <button className=' font-semibold text-[#979797] tracking-wider'>Shop</button>
            </Link>


            <Link to="/Earphones" className='navCard'>
                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="/EarphonesNavbar.svg" alt="" className='mx-auto' />
                </div>
                <span className='font-semibold tracking-wide'>Earphones</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </Link>

        </div>
  )
}

export default HomeHero