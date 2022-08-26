import React from 'react'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Reasons from './Component/Reasons/Reasons'
import Plans from './Component/Plans/Plans'
import './App.css'
import Testimonials from './Component/Testimonials/Testimonials'
import Join from './Component/Join/Join'

function App() {
  return (
    <div className='App'>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
    </div>
  )
}

export default App