import React from 'react'
import './Plans.css'

//Importing data
import {plansData} from '../../data/plansData'

//Importing image
import whiteTick from '../../assets/whiteTick.png'


const Plans = () => {
  return (
    <div className="plans-container">
        <div style={{gap:'2rem'}} className="programs-header">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>

        <div className="plans">
          {plansData.map((data,i)=>(
             <div className="plan" key={i}>
                {data.icon}
                <span>{data.name}</span>
                <span>$ {data.price}</span>

                <div className="features">
                    {data.features.map((feature,i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="white Tick" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div>
                   <span>See more benefits {'->'}</span>
                </div>
                <button className='btn'>Join now</button>
             </div>
          ))}
        </div>
    </div>
  )
}

export default Plans