import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

type Props = {
    setNavbar: any
}

const MobileNavbar = ({setNavbar}: Props) => {
    return (
        <>
        <AnimatePresence>
        <motion.div className='flex flex-col md:flex-row md:space-x-8 pt-14 w:4/5 md:p-14 space-y-16 md:space-y-0 bg-white rounded-b-lg lg:hidden pb-8 md:pb-6 absolute top-16 w-full z-20'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
        >

            
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

        </motion.div>


        </AnimatePresence>
                <div className='top-16 absolute w-screen bg-slate-300 bg-opacity-25 h-[3000vh] z-10 lg:hidden' onClick={() => setNavbar(false)}></div>
        </>
    )
}

export default MobileNavbar