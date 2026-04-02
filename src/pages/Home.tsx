import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import ShopBy from '../components/ShopBy'
import Products from '../components/Products'
import Chooseus from '../layout/Chooseus'


const Home: React.FC = () => {
  return (
    <div className="">
       <Hero />
      <About  />
      <ShopBy />
      <Products />
      <Chooseus />
    </div>
  )
}

export default Home