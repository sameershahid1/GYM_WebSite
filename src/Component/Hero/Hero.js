import React from 'react'
import Header from '../Header/Header'

/*Importing Images for Hero section*/
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'


/*CSS file*/
import './Hero.css'

const Hero = () => {
   const transition={type:'spring',duration:3};
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          {/*Header-menu*/}
           <Header/>
 
          {/*Add*/}
           <div className="the-best-ad">
             <motion.div 
              initial={{left:'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition,type:'tween'}}
             ></motion.div>
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
           <motion.div 
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}  
            className="heart-rate">
              <img src={Heart} alt='Heart-rate'/>
              <span>Heart Rate</span>
              <span>116 bpm</span>
           </motion.div>

           {/*Hero Images*/}
              <img 
               className='hero-image' src={hero_image} alt='Hero-imgage'/>
              <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}               
                className='hero-image-back' src={hero_image_back} alt='Hero-imgage back'/>
            {/*Calories*/}
            <motion.div 
               initial={{right:'33rem'}}
               whileInView={{right:'28rem'}}
               transition={transition}
               className="calories">
                <img src={Calories} alt="Calories" />
                <div>
                  <span>Calories burned</span>
                   <span>220 kcal</span>                  
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero