import React from 'react'

type Props = {}

const MobileNavbar = (props: Props) => {
    return (
        <div className='flex flex-col md:flex-row md:space-x-8 pt-14  w:4/5 md:p-14 space-y-16 md:space-y-0 bg-red-400 '>

            
            <div className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" alt="" className='' />
                </div>
                <span className='font-semibold tracking-wide '>Headphones</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </div>


            <div className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" alt="" className='' />
                </div>
                <span className='font-semibold tracking-wide'>Headphones</span>
                <button className=' font-semibold text-[#979797] tracking-wider	 '>Shop</button>
            </div>


            <div className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png" alt="" className='' />
                </div>
                <span className='font-semibold tracking-wide'>Headphones</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </div>


        </div>
    )
}

export default MobileNavbar