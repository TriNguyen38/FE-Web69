import React from 'react'
import './Home.css'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <Categories/>
     
   
    </div>
    
  )
}

export default Home