import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import MobileNavbar from './MobileNavbar'
type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
        <div className='bg-[#191919] flex items-center p-4 justify-between md:p-6' >
            <div className='flex items-center'>
                <div className='text-white '>
                    <GiHamburgerMenu className='md:w-6 md:h-6 w-4 h-4'  />
                </div>
                <span className='text-white md:ml-16 hidden md:block font-bold text-3xl'>audiophile</span>
            </div>
            <span className='text-white md:ml-8 md:hidden font-bold text-2xl'>audiophile</span>

            <div className='text-white '>
                <AiOutlineShoppingCart className='md:w-6 md:h-6 w-4 h-4' />
            </div>
        </div>
        <MobileNavbar/>
        </>
    )
}

export default Navbar