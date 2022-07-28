import React, { useCallback,useEffect }from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import agent from '../../service/agent';
import Helmet from '../../components/Helmet';
import ProductContent from './ProductContent';
import "./ProductDetail.scss"
import ProductSlider from './ProductSlider';
import NotFound from '../NotFound';
const crumbs = [
  {
      title: "Giày nike",
      href: "nike"
  },
  {
      title: "Giày Nike Air Force 1 Shadow SE Women’s “Solar Red” DB3902-100",
      href: "nike"
  }
]

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false)
  const getProduct = useCallback(async () => {
    try{

      const pr = await agent.Product.getProductByID(id)
      setProduct(pr)
    
    }catch(error){
      setError(true)
      console.log(error);
    }
  }, [])
  useEffect(() => {
      getProduct()
    }, [getProduct])
  return (
      <Helmet title = {"Giày Nike Air Force 1 Shadow SE Women’s “Solar Red” DB3902-100"} >
            <Breadcrumb crumbs = {crumbs} />
          {product && <div className="container product--detail">
            <ProductSlider product = {product} />
            <ProductContent product = {product} />
          </div>}
          {error && <NotFound />}
      </Helmet>
    
  )
}

export default ProductDetail