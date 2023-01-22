import React from 'react'
import { article } from '../../../typing'

type Props = {
    article:article
}

const Backgrounds = ({article}: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8 w-4/5 mx-auto   ">
   
    <div className="flex flex-col space-y-5">
       <img src={article.bg1} alt="" className="rounded-lg"  />
       <img src={article.bg2} alt="" className="rounded-lg" />
    </div>

    <div className="">
     <img src={article.bg3} alt="" className="rounded-lg " />
    </div>
 </div>
  )
}

export default Backgrounds