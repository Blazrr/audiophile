import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    pageTitle :string
}

const Header = ({pageTitle}: Props) => {
  return (
    <>
    <hr  />
    <div className='bg-[#191919]   text-white p-10'>
        <h1 className='text-center text-2xl lg:text-4xl font-bold' >
            {pageTitle.toUpperCase()}
        </h1>
    </div>

    </>
  )
}

export default Header