import React from 'react'
import BannerCategory from '../../components/BannerCategory'
import Slider from '../../components/Slider'
import FeatureProduct from './FeatureProduct'
import products from '../../assets/data/product'
import policy from '../../assets/data/policy'
import "./Home.scss"
import WhyNote from './WhyNote'
import ProductCategory from '../../components/ProductCategory'
import { getListProduct } from '../../assets/data/product'
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <BannerCategory />
      <FeatureProduct products = {products}  />
      <WhyNote data = {policy} />
      {
        getListProduct(8).map((item, index) => (
          <ProductCategory key = {index} products = {item.products} path = {item.path} title = {item.title} />
        ))
      }
    </div>
  )
}

export default Home