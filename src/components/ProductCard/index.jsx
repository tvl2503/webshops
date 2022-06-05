import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./ProductCard.scss"
import numberWithVND from '../../utils/numberwithvnd'
const ProductCard = ({product}) => {
  return (
    <div className='product--card'>
        <div className="product--card__img">
         <Link to = "/">
            <img src={product.src} alt="" />
         </Link>
        <div className="product--card__img__quickview">
          <i class="fal fa-eye"></i>
          <span>Xem nhanh</span>
        </div>
        </div>
        <div className="product--card__text">
          <p className="product--card__text__title">
              <Link to = "">
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