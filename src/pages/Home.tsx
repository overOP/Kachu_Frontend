import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'


const Home: React.FC = () => {
  return (
    <div className="relative">
       <Hero />
      <About  />
    </div>
  )
}

export default Home