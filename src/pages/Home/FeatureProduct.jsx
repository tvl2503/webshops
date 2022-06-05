import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '../../components/Grid'
import ProductCard from '../../components/ProductCard'

const FeatureProduct = ({products}) => {
    const [selectOption, setSelectOption] = useState(0)
    const [product, setProduct] = useState(products[0].product)
    const handleSelected = (item, index) => {
        setSelectOption(index)
        setProduct(item.product)
    }
  return (
    <div className='feature--product'>
        <div className="container">
        <div className="feature--product__title">
            <h1 className="feature--product__title__main">
                <span>Sản phẩm nổi bật</span>
            </h1>
            <div className="feature--product__title__text">
                <span>Khuyến mãi cuối tuần</span>
            </div>
        </div>
        <div className="feature--product__menu">
            <div className="feature--product__menu__tap">
                <div className="feature--product__menu__tap__caption">
                    <Grid col = {5} mdCol = {4} smCol = {3} >

                    {
                        products.map((item, index) => (
                            <div key = {index} 
                            className={`feature--product__menu__tap__caption__item ${index === selectOption ? 'active': ''} `}
                            onClick = {() => handleSelected(item, index)}
                            >
                                {item.name}
                            </div>
                        ))
                    }
                    </Grid>
                </div>
                <div className="feature--product__menu__tap__content">
                    <Grid col = {4} mdCol = {3} smCol = {2} gap = {30} >
                        {product.map((item, index) => (
                            <ProductCard key = {index} product = {item} />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
        <div className="feature--product__other">
            <button>Xem thêm các sản phẩm khác</button>
        </div>
        </div>

    </div>
  )
}

FeatureProduct.propTypes = {
    
}

export default FeatureProduct