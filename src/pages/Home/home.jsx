import { lazy, Suspense } from 'react'

import NavBar from '../../Components/NavBar/Navbar'
import IntroText from '../../Components/Intro_Text/IntroText'
import NightSky from '../../Components/NightSky/NightSky'
import CoverImage from '../../Components/CoverImage/coverImage'
import Line from '../../Components/BottomLine/Line'
import useScrollAnimation from '../../hooks/useScrollAnimation'

import './home.css'

const Projects    = lazy(() => import('../../Components/Projects/projects'))
const Resume      = lazy(() => import('../../Components/Resume/Resume'))
// const Testimonial = lazy(() => import('../../Components/Testimonials/Testimonial'))
const Contact     = lazy(() => import('../../Components/Contact/Contact'))
const Footer      = lazy(() => import('../../Components/Footer/Footer'))

const Home = () => {

  useScrollAnimation()

  return (
    <section className="home" id='home'>

      {/* Background */}
      <NightSky />

      {/* Navbar — no animation */}
      <NavBar />

      {/* Hero Section */}
      <div className="home-content">

        <div className="home-left" data-animate>
          <IntroText />
        </div>

        <div className="home-right" data-animate>
          <CoverImage />
        </div>

      </div>

      {/* Below fold — lazy loaded */}
      <Suspense fallback={null}>
        <Line />
        <Projects />
        <Line />
        <Resume />
        <Line />
        {/* <Testimonial />
        <Line /> */}
        <Contact />
        <Footer />
      </Suspense>

    </section>
  )
}

export default Home
