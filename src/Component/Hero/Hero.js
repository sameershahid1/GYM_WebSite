import React from 'react'
import Header from '../Header/Header'

/*Importing Images for Hero section*/
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

/*CSS file*/
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          {/*Header-menu*/}
           <Header/>
 
          {/*Add*/}
           <div className="the-best-ad">
             <div></div>
              <span>the best fitness club in the town</span>
           </div>

          {/*hero-Heading*/}
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

           {/*hero-Figures*/}
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
           {/*Buttons*/}
           <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
           </div>
        </div>
        <div className="right-h">
           <button className='btn'>Join Now</button>
           <div className="heart-rate">
              <img src={Heart} alt='Heart-rate'/>
              <span>Heart Rate</span>
              <span>116 bpm</span>
           </div>

           {/*Hero Images*/}
              <img className='hero-image' src={hero_image} alt='Hero-imgage'/>
              <img className='hero-image-back' src={hero_image_back} alt='Hero-imgage back'/>
            {/*Calories*/}
            <div className="calories">
                <img src={Calories} alt="Calories" />
                <div>
                  <span>Calories burned</span>
                   <span>220 kcal</span>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero