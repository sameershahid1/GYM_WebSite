import React from 'react'
import './Programs.css'

/*Images*/
import RightArrow from '../../assets/rightArrow.png'

/*Importing the data from the ProgramData file*/
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/*Header*/}
        <div className="programs-header">
           <span className='stroke-text'>explore our</span>
           <span>programs</span>
           <span className='stroke-text'>to shape you</span>
        </div>

         {/*Programs*/}
         <div className="program-categories">
             {programsData.map((data,i)=>(
                <div key={i} className="category">
                   {data.image}
                   <span>{data.heading}</span>
                   <span>{data.details}</span>
                   <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="Right Arrow" />
                   </div>
                </div>
             ))}
         </div>
    </div>
  )
}

export default Programs