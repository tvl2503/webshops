import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./ProductCategory.scss"
import Grid from '../Grid'
import ProductCard from '../ProductCard'
const img =  "http://t0320.store.nhanh.vn/tp/T0320/img/banner-mid.png"
const ProductCategory = ({products, title, path}) => {
  return (
    <div className='product--category'>
        <div className="product--category__banner">
            <Link to={"/"}>
                <img src={img} alt="" />
            </Link>
            <div className="product--category__banner__title">
                <h2>{title}</h2>
                <span>Sản phẩm mới nhất nổi bật nhất</span>
            </div>
        </div>
        <div className="container">
          <Grid col = {4} mdCol = {3} smCol = {2} gap = {30} >
            {products.map((item, index) => (
              <ProductCard product={item} key = {index} />
            ))}
          </Grid>
        </div>
        <div className="feature--product__other">
          <Link to = {path}> <button>Xem thêm các sản phẩm khác</button></Link>
           
        </div>
    </div>
  )
}

ProductCategory.propTypes = {}

export default ProductCategory