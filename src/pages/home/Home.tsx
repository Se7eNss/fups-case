import React from 'react'
import CurrencyTab from '../../sections/home/currencyTab/CurrencyTab'
import Pager from '../../sections/home/pager/Pager'
import Carousel from '../../sections/home/slider/Carousel'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Pager/>
        <CurrencyTab/>
    </div>
    
  )
}

export default Home