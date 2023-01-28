import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HomeHeader = (props: Props) => {
    return (
        <div className='flex items-center justify-center lg:px-20 bg-[url("/HomeHeadphone.svg")] bg-no-repeat bg-cover bg-center h-[500px] lg:bg-none bg-[#191919]  '>
            <div className='flex flex-col space-y-6  '>
                <h2 className='text-white text-center tracking-widest mb-32 md:mb-0 font-extralight lg:mb-0 lg:text-left'>
                    New Product
                </h2>
                <h1 className=' text-4xl hidden md:block text-white font-bold  mx-auto lg:mx-0'>
                    XX99 Mark II HEADPHONES
                </h1>
                <p className='text-white w-3/5 mx-auto text-center font-light lg:mx-0 lg:text-left'>
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <div className='flex'>
                    <Link to="/Headphones/xx99m2" className='text-white bg-orange-500 lg:text-left mx-auto mt-4 px-4 py-2 hover:bg-orange-700 transition-all lg:mx-0'>
                        SEE PRODUCT
                    </Link>
                </div>
            </div>

            <div className='hidden lg:block  '>
                <img src="/xx99m2.svg" alt="Picture of a XX99 Headset" className='max-h-[500px]' />
            </div>

        </div>

    )
}

export default HomeHeader