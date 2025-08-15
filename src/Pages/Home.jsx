import React from 'react'
import Hero from '../Components/Hero/Hero'
import Video from '../Components/Video/Video'
import About from '../Components/About/About'
import Works from '../Components/Works/Works'
import Embed from '../Components/Embed/Embed'
import MyWorks from '../Components/MyWorks/MyWorks'

const Home = () => {
  return (
    <>
       <Hero />
     {/* <Video />  */}
     <About />
     <Works />
     <Embed />
     <MyWorks />
    </>
  )
}

export default Home
