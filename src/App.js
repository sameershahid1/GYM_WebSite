import React from 'react'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Reasons from './Component/Reasons/Reasons'
import Plans from './Component/Plans/Plans'
import './App.css'


function App() {
  return (
    <div className='App'>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  )
}

export default App