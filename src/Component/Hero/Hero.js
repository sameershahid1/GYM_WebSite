import React from 'react'
import Header from '../Header/Header'

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
          {/*Header-menu*/}
           <Header/>
 
          {/*Add*/}
           <div className="the-best-ad">
             <div></div>
              <span>the best fitness club in the town</span>
           </div>

          {/*Heading*/}
           <div className="hero-text">
              <div>
                <span>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal </span>
                <span>Body</span>
              </div>
           </div>
        </div>
        <div className="right-h">Right side</div>
    </div>
  )
}

export default Hero