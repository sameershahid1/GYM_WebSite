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
                <span className="stroke-text">Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              
              <div>
                <span>In here we will help you to shape
                 and build your ideal body and live up your life to fullest
                </span>
              </div>
           </div>
           <div className="figures">
            <div>
               <span>+ 140</span>
               <span>expert coaches</span>
            </div>
            <div>
               <span>+ 978</span>
               <span>members joined</span>
            </div>
            <div>
               <span>+ 50</span>
               <span> fitness programs</span>
            </div>
           </div>
        </div>
        <div className="right-h">Right side</div>
    </div>
  )
}

export default Hero