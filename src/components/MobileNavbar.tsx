import React from 'react'

type Props = {}

const MobileNavbar = (props: Props) => {
    return (
        <div className='flex flex-col md:flex-row md:space-x-8 md w:4/5 md:p-8'>


            <div className='flex flex-col w-2/5 md:w-auto mx-auto justify-center items-center space-y-4 border-2 border-red '>
                
                <div className='flex'>
                    <img src="https://m.media-amazon.com/images/I/71+Uwt-oIgL._AC_SL1500_.jpg" alt="" className='' />
                </div>
                <span>Headphones</span>
                <button>Shop</button>
            </div>

            <div className='flex flex-col w-2/5 md:w-auto mx-auto justify-center items-center space-y-4 border-2 border-red'>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71+Uwt-oIgL._AC_SL1500_.jpg" alt="" className='filter drop-shadow-2xl"'/>
                </div>
                <span>Headphones</span>
                <button>Shop</button>
            </div>

            <div className='flex flex-col w-2/5 md:w-auto mx-auto justify-center items-center space-y-4 border-2 border-red'>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71+Uwt-oIgL._AC_SL1500_.jpg" alt="" className='filter drop-shadow-[0_320px_320px_rgba(0,0,0,0.5)]' />
                </div>
                <span>Headphones</span>
                <button>Shop</button>
            </div>


        </div>
    )
}

export default MobileNavbar