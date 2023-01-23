import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HomeHeroThree = (props: Props) => {
    return (
        <div className='w-4/5 mx-auto flex md:space-x-8 flex-col md:flex-row md:space-y-0 space-y-4 mt-8'>
            <div className='bg-[url("/HomeYx1.svg")] bg-cover h-[400px] w-full  bg-center rounded'>

            </div>

            <div className='h-[400px] flex justify-center flex-col p-8 space-y-8 rounded bg-[#F1F1F1] w-full '>
                <h3 className='font-bold text-2xl md:text-3xl text-center'>ZX7 SPEAKER </h3>
                <div className='flex justify-center '>
                    <Link to='/Speakers/zx7' className='   px-4 py-2 hover:bg-black hover:text-white transition-all border-slate-700 border-[1px] md:mx-auto'>
                        SEE PRODUCT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroThree