import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
import profile from '../../assets/profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hey👋🏼, I am Anirudh Purohit Full stack developer from India, based in Uttarakhand with proven technical, organizational, and communication skills, working with Agile and designing software solutions. I am A avid coder and offer good web developement skills with work on many technologies like Django,SQL,React,Flask and many more.</p>
                <p>Since I am a fresher, I am still learning. But I can vouch for the fact that I am a fast learner. I am always open to learn and unlearn at the same time.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Django</p><hr style={{width:"60%"}}/></div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
           <h1>500+</h1>
           <p>DSA Questions on Leetcode</p>
        </div>
        <hr/>
        <div className="about-achievement">
           <h1>9+</h1>
           <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
           <h1>+1</h1>
           <p>Research Paper published</p>
        </div>
        <hr/>
        <div className="about-achievement">
           <h1>*2</h1>
           <p>Cleared  UPSC NDA Examination</p>
        </div>
      </div>
    </div>
  )
}

export default About
