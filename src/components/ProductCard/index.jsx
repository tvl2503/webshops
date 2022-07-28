import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./ProductCard.scss"
import numberWithVND from '../../utils/numberwithvnd'
import { addProductModal } from '../ProductViewModal/productModalSlice'


import { useDispatch } from 'react-redux';
const ProductCard = ({product}) => {

  const dispatch = useDispatch();
  const handleAddProduct = () => {
 
    dispatch(addProductModal(product))


  }
  return (
    <div className='product--card'>
        <div className="product--card__img">
         <Link to = {`/product/${product._id}`}>
            <img src={product.image[0]} alt="" />
         </Link>
        <div className="product--card__img__quickview" onClick={handleAddProduct} >
          <i class="fal fa-eye"></i>
          <span>Xem nhanh</span>
        </div>
        </div>
        <div className="product--card__text">
          <p className="product--card__text__title">
              <Link to = {`/product/${product._id}`}>
                {product.name}
              </Link>
          </p>
          <p className="product--card__text__price">
            {numberWithVND(product.price)}
          </p>
        </div>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard