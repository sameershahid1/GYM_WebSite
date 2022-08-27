import React,{useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import Right from '../../assets/rightArrow.png'
import Left from '../../assets/leftArrow.png'
import {motion} from 'framer-motion'


const Testimonials = () => {
  const transition={type:'spring',duration:3};
  const [select,setSelect]=useState(0);
  const tLength=testimonialsData.length;
  const CheckingLimit=(index)=>{
    if(index>=tLength)
    {
       setSelect(0);
    }
    else if(index<0)
    {
       setSelect(tLength-1);
    }
    else{
    setSelect(index);      
    }
  };
   
  return (
    <div className="Testimonials" id='Testimonials'>
       <div className="left-t">
           <span>TESTIMONIALS</span>
           <span className='stroke-text'>WHAT THEY</span>
           <span>SAY ABOUT US</span>
           <motion.span
           key={select}
           initial={{opacity:0,x:-100}}
           animate={{opacity:1,x:0}}
           exit={{opacity:0,x:100}}
           transition={transition}
           >{testimonialsData[select].review}</motion.span>
           <span>
            <span>
           <span style={{color:"var(--orange)"}}>{testimonialsData[select].name}</span>
                 {' - '}{testimonialsData[select].status}
            </span>
           </span>
       </div>
       <div className="right-t">
           <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition,duration:2}}
            ></motion.div>
           <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition,duration:2}}           
            ></motion.div>
           <motion.img 
            key={select}
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}} 
            exit={{opacity:0,x:-100}}
            transition={transition}
            src={testimonialsData[select].image} alt="loading" />
           <div className="arrows">
              <img onClick={()=>{CheckingLimit(select-1)}} src={Left} alt="Left"/>
              <img  onClick={()=>{CheckingLimit(select+1)}}  src={Right} alt="Right"/>
           </div>
       </div>
    </div>
  )
}

export default Testimonials