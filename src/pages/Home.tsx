import React from 'react'
import { Link } from 'react-router-dom'
import HomeHeader from '../components/HomeHeader'
import HomeHero from '../components/HomeHero'
import HomeHeroSpeaker from '../components/HomeHeroSpeaker'
import HomeHeroSpeakerTwo from '../components/HomeHeroSpeakerTwo'
import Navbar from '../components/Navbar'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <HomeHero />
      <HomeHeroSpeaker/>
      <HomeHeroSpeakerTwo/>
  
    </>
  )
}

export default Home