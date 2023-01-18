import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    pageTitle :string
}

const Header = ({pageTitle}: Props) => {
  return (
    <>
    <div className='bg-black h-[150px] text-white pt-24'>
        <h1 className='text-center text-2xl font-bold' >
            {pageTitle}
        </h1>
    </div>
    <p  className=' p-10 text-slate-500 '>
      <Link to=".." className='mt-16'>
      Go back   
        </Link> 
    </p>
    </>
  )
}

export default Header