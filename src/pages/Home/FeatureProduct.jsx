import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '../../components/Grid'
import ProductCard from '../../components/ProductCard'
import { useCallback } from 'react'
import agent from '../../service/agent'
import Loading from '../../components/Loading'
import { useEffect } from 'react'
const FeatureProduct = ({category}) => {
    const [selectOption, setSelectOption] = useState(0)
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(false)

    const getProduct =  useCallback(async (id) => {
        try{
            const pro = await agent.Product.getProductByCate(id)
            setLoading(false)
            setProducts(pro.productsList)
          }
          catch(err){
            setProducts({})
            setLoading(false)
          }
    }, [selectOption])
    const handleSelected = (id, index) => {
        getProduct(id)
        setSelectOption(index)
    }
    useEffect(() => {
        getProduct(category[0]._id)
    }, [])
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
                    <Grid col = {4} mdCol = {3} smCol = {2} >

                    {
                        category.map((item, index) => (
                            <div key = {index} 
                            className={`feature--product__menu__tap__caption__item ${index === selectOption ? 'active': ''} `}
                            onClick = {() => handleSelected(item._id, index)}
                            >
                                {item.name}
                            </div>
                        ))
                    }
                    </Grid>
                </div>
                {loading && <Loading />}
                {products.length > 0 &&
                
                <div className="feature--product__menu__tap__content">
                    <Grid col = {4} mdCol = {3} smCol = {2} gap = {30} >
                        {products.map((item, index) => (
                            <ProductCard key = {index} product = {item} />
                        ))}
                    </Grid>
                </div>
                }
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