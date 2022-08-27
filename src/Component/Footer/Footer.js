import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="Github" />
                <img src={Instagram} alt="Instagram" />
                <img src={LinkedIn} alt="Linkedin" />
            </div>

             <div className="logo-f">
                <img src={Logo} alt="Logo"/>
             </div>
        </div>
      
       <div className="blur blur-f-1"></div>
       <div className="blur blur-f-2"></div>

    </div>
  )
}

export default Footer