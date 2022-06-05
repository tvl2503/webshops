import React from 'react'
import BannerCategory from '../../components/BannerCategory'
import Slider from '../../components/Slider'
import FeatureProduct from './FeatureProduct'
import products from '../../assets/data/product'
import policy from '../../assets/data/policy'
import "./Home.scss"
import WhyNote from './WhyNote'
import ProductCategory from '../../components/ProductCategory'
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <BannerCategory />
      <FeatureProduct products = {products}  />
      <WhyNote data = {policy} />
      {
        products.map((item, index) => (
          <ProductCategory key = {index} products = {item.product} title = {item.name} />
        ))
      }
    </div>
  )
}

export default Home