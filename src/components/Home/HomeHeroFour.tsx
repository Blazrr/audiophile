import React from 'react'

type Props = {}

const HomeHeroFour = (props: Props) => {
  return (
    <div className='w-4/5 mx-auto  mt-10 flex lg:flex-row-reverse flex-col'>

        <div className='w-full h-[300px]  bg-cover bg-[url("/HeroMan.svg")] rounded'>

        </div>
        

        <div className='w-full full flex items-center justify-center flex-col space-y-4 p-4 h-[300px]' >
            <h2 className='md:text-3xl text-2xl text-center'>
                    Bringing you the <span className='text-orange-400 '>best</span> audio gear
            </h2>
            <p className='text-sm md:text-md'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
             We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
             Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
        </div>
    </div>
  )
}

export default HomeHeroFour