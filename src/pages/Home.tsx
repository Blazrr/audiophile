import React from 'react'
import Footer from '../components/Footer'
import HomeHeader from '../components/Home/HomeHeader'
import HomeHero from '../components/Home/HomeHero'
import HomeHeroFour from '../components/Home/HomeHeroFour'
import HomeHeroSpeaker from '../components/Home/HomeHeroSpeaker'
import HomeHeroSpeakerTwo from '../components/Home/HomeHeroSpeakerTwo'
import HomeHeroThree from '../components/Home/HomeHeroThree'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HomeHeader />
      <HomeHero />
      <HomeHeroSpeaker/>
      <HomeHeroSpeakerTwo/>
      <HomeHeroThree/>
      <HomeHeroFour/>
      <Footer/>
  
    </>
  )
}

export default Home