import React from 'react'
import { article } from '../../../typing'

type Props = {
    article:article
}

const Backgrounds = ({article}: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8 w-4/5 mx-auto   ">
   
    <div className="flex flex-col space-y-5 ">
       <img src={article.bg1} alt="Just a Background image" className="rounded-lg object-cover h-1/2"  />
       <img src={article.bg2} alt="Just a Background image" className="rounded-lg object-cover" />
    </div>

    <div className="">
     <img src={article.bg3} alt="Just a Background image" className="rounded-lg object-fill	 " />
    </div>
 </div>
  )
}

export default Backgrounds