import React from 'react'

import Header from '@/partials/Header/Header'

import FeaturesHome from '../partials/Features'
import Footer from '../partials/Footer'
import HeroHome from '../partials/HeroHome'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="grow pt-[64px]">
        <HeroHome />
        <FeaturesHome />
      </main>
      <Footer />
    </div>
  )
}

export default Home
