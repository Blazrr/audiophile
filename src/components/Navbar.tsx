import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import MobileNavbar from './MobileNavbar'
import { Link } from 'react-router-dom'
type Props = {}

const Navbar = (props: Props) => {

    const [navbar, setNavbar] = useState(false)

    return (
        <div className='bg-black fixed top-0 w-full z-30 '>
            <div className=' flex items-center p-4 justify-between md:pt-6 lg:justify-around ' >
                <div className='flex items-center'>
                    <div className='text-white lg:hidden cursor-pointer '>
                        <GiHamburgerMenu className='md:w-6 md:h-6 w-4 h-4' onClick={() => setNavbar(!navbar)} />
                    </div>
                    <span className='text-white md:ml-16  lg:ml-0 hidden md:block font-bold text-3xl'>audiophile</span>
                </div>
                <span className='text-white md:ml-8 md:hidden font-bold text-2xl'>audiophile</span>
                <div className='space-x-4 text-white hidden lg:flex'>
                    <Link to="/">  <span className='hover:text-xl transition-all hover:text-orange-500' >HOME</span> </Link>
                    <Link to="/">  <span className='hover:text-xl transition-all hover:text-orange-500' >HEADPHONES</span></Link>
                    <Link to="/">  <span className='hover:text-xl transition-all hover:text-orange-500' >SPEAKERS</span></Link>
                    <Link to="/">  <span className='hover:text-xl transition-all hover:text-orange-500' >EARPHONES</span></Link>
                </div>

                <div className='text-white '>
                    <AiOutlineShoppingCart className='md:w-6 md:h-6 w-4 h-4' />
                </div>

            </div>

            <hr className='w-4/5 mx-auto border-slate-400' />

            {navbar &&
                <MobileNavbar setNavbar={setNavbar} />

            }

        </div>
    )
}

export default Navbar