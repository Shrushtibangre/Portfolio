import React from 'react'
import './Hero.css'
import Untitled from '../../assets/Untitled.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div  id='home' className='hero'>
        <img src={Untitled} alt="" />
        <h1><span>I'm shrushti Bangre,</span> Full stack developer Intern based in India </h1>
        <p>I am a Full stack developer Intern from Nagpur, Maharastra with 3 Months of experince in Pixonix Softwre Technology </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link"offset={50} href="#contact" >Connect with me</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
