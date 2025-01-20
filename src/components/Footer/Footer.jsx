import React from 'react'
import './Footer.css'
import instagram_icon from '../../assets/Instagram.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Twitter from '../../assets/Twitter.svg'
import Github from '../../assets/Github.svg'
import Ani_footer from '../../assets/Ani_footer.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={Ani_footer} alt="" />
                <p>More About Me</p>
            </div>
            <div className="footer-top-right">
               <a href='https://www.linkedin.com/in/anirudh-purohit-2a0138217/' target='_blank'> <img src={Linkedin} alt="linkedin icon" /></a>
               <a href='https://github.com/purohitanirudh632' target='_blank'><img src={Github} alt="Github icon" /></a>
                <img src={Twitter} alt="twitter icon" />
               <a href="https://www.instagram.com/anirudhpurohit632/" target='_blank'><img src={instagram_icon} alt="Instagram icon" /></a>
            </div>
        </div>
      <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">2024 Anirudh purohit. All rights reserved </p>  
           <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
           </div>
        </div> 

    </div>
  )
}

export default Footer
