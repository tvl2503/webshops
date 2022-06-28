import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import SideBar from '../../components/SideBar'
import Banner from './Banner';
import Grid from "../../components/Grid"
import { filterProduct } from '../../Context/Context';
import ProductCard from '../../components/ProductCard';
import "./Nike.scss"
import { useEffect } from 'react';
const banner = "https://mcdn.nhanh.vn/store3/97757/bn/Banner_Mule_1400x600.jpg"


const Nike = ({path, listProduct, brumb, index}) => {
  const crumbs = [
    {
      title: brumb,
      href: path
    }
  ]
  const [products, setProducts] = useState(listProduct);
  const handleFilterProduct = (filter) => {
    setProducts(filter)
  }
  useEffect(() => {
    setProducts(listProduct)
  }, [listProduct])
  return (
    <filterProduct.Provider value = {{ handleFilterProduct}}>
        <Banner src = {banner}  />
        <Breadcrumb crumbs = {crumbs} />
        <div className="container content" >
          <SideBar index = {index} products = {listProduct} />
          <div className="content--list--product">
          <Grid col = {3} mdCol = {2} gap = {20}>
            {
              products.map((item, index) => (
                <ProductCard key = {index} product = {item}  />
              ))
            }
          </Grid>
          </div>
        </div>
    </filterProduct.Provider>
  )
}

export default Nike