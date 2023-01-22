import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='mt-16 bg-black text-white flex flex-col items-center p-8 space-y-8'>
            <h2 className='text-xl font-bold'>audiophile</h2>
            <div className='space-y-3 text-white flex flex-col mt-6 justify-center items-center  w-full md:flex-row md:space-y-0 md:space-x-5'>
                <Link to="/">  <span className=' transition-all hover:text-orange-500' >HOME</span> </Link>
                <Link to="/">  <span className=' transition-all hover:text-orange-500' >HEADPHONES</span></Link>
                <Link to="/">  <span className=' transition-all hover:text-orange-500' >SPEAKERS</span></Link>
                <Link to="/">  <span className=' transition-all hover:text-orange-500' >EARPHONES</span></Link>
            </div>
            <p className='text-center text-sm font-extralight mt-8'>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted
                to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className='flex items-center justify-around w-full'>

                <span className=''>
                    Copyright 2021. All Rights Reserved
                </span>
                <div className='flex space-x-4 '>
                   <a href=""> <AiFillFacebook className='h-8 w-8 hover:text-orange-500 transition-all' /> </a> 
                   <a href=""><AiFillTwitterSquare className='h-8 w-8 hover:text-orange-500 transition-all' /> </a>
                   <a href=""><AiOutlineInstagram className='h-8 w-8 hover:text-orange-500 transition-all' /> </a>
                </div>

            </div>

        </div>
    )
}

export default Footer