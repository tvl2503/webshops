import React from 'react'
import BannerCategory from '../../components/BannerCategory'
import Slider from '../../components/Slider'
import FeatureProduct from './FeatureProduct'
import policy from '../../assets/data/policy'
import "./Home.scss"
import WhyNote from './WhyNote'
import ProductCategory from '../../components/ProductCategory'

import Helmet from '../../components/Helmet'
const Home = ({category}) => {
  return (
    <Helmet title = "Trang chủ" >
        <div className='home'>
        <Slider />
        <BannerCategory />
        <FeatureProduct category = {category}  />
        <WhyNote data = {policy} />
        {
          category.map((item, index) => (
            <ProductCategory key = {index} id = {item._id} path = {item.path} title = {item.name} />
          ))
        }
      </div>
    </Helmet>
 
  )
}

export default Home