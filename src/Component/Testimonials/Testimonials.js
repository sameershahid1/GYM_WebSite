import React,{useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import Right from '../../assets/rightArrow.png'
import Left from '../../assets/leftArrow.png'

const Testimonials = () => {
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
    <div className="Testimonials">
       <div className="left-t">
           <span>TESTIMONIALS</span>
           <span className='stroke-text'>WHAT THEY</span>
           <span>SAY ABOUT US</span>
           <span>{testimonialsData[select].review}</span>
           <span>
            <span>
           <span style={{color:"var(--orange)"}}>{testimonialsData[select].name}</span>
                 {' - '}{testimonialsData[select].status}
            </span>
           </span>
       </div>
       <div className="right-t">
           <div></div>
           <div></div>
           <img src={testimonialsData[select].image} alt="loading" />
           <div className="arrows">
              <img onClick={()=>{CheckingLimit(select-1)}} src={Left} alt="Left"/>
              <img  onClick={()=>{CheckingLimit(select+1)}}  src={Right} alt="Right"/>
           </div>
       </div>
    </div>
  )
}

export default Testimonials