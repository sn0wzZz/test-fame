import React from 'react'

import HeroAbout from '@/components/hero-about'
import HeroMe from '@/components/about-me'
import InfoBox from '@/components/info-box'
import OurMission from '@/components/our-mission'
import Team from '@/components/team'
import JoinUs from '@/components/join-us'
import Footer from '../partials/Footer'
import Header from '../partials/Header/Header'

const About = () => {
  return (
    <>
      <Header />
      <main className="bg-bgColor pt-[64px]">
        <HeroAbout />
        <HeroMe />
        <InfoBox />
        <OurMission />
        <Team />
        <JoinUs />
      </main>
      <Footer />
    </>
  )
}

export default About
