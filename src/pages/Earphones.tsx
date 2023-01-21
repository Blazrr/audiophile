import React from 'react'
import Header from '../components/Commons/Header'
import {useSelector} from 'react-redux'
import SeeProduct from '../components/Commons/SeeProduct'
import HomeHero from '../components/Home/HomeHero'
import Footer from '../components/Footer'
import HomeHeroFour from '../components/Home/HomeHeroFour'

type Props = {}

const Earphones = (props: Props) => {
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });
  
  return (
    <>
        <Header pageTitle='Earphones'/>
        <SeeProduct title={articles[5].title} description={articles[5].description} img={articles[5].img} link="/Earphones/yx1"   />
        <HomeHero/> 
        <HomeHeroFour/>
        <Footer/>
    </>
  )
}

export default Earphones