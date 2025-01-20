import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import profile1 from '../../assets/profile1.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile1} alt="" />
       <h1><span>I'm Anirudh Purohit,</span> A Full Stack Developer And a Machine Lerarning enthusiast </h1>  
        <p>I am to utilize and enhance my Knowledge and Skills to continuously contribute to the organization while working in 
        a growing environment so as to challenge myself and excel with hard work perseverance and dedication.</p>
        <div className="hero-action">
          {/* <div className="hero-connect">Connect With me</div> */}
          <a className='download-link' href='../assets/Anirudh_latest.pdf' download="Anirudh_Resume.pdf"> <div className="hero-resume">My Resume</div> </a>
         </div>     
    </div>
  )
}

export default Hero
