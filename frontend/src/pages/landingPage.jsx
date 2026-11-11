import React from 'react'
import NavBar from '../componentes/navBar'
import LandingPageHero from '../componentes/landing-page-components/landingPageHero'
import LandingPageAbout from '../componentes/landing-page-components/landingPageAbout'
import Footer from '../componentes/footer'
import LandingPageFeature from '../componentes/landing-page-components/landingPageFeature'

export default function LandingPage() {
    
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col gap-y-25 bg-background">
        <LandingPageHero />
        <LandingPageFeature />
        <LandingPageAbout />
      </main>
      <section id="contacts">
        <Footer />
      </section>
    </>
  )
}

