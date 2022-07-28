import React, { useCallback, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import SideBar from '../../components/SideBar'
import Banner from './Banner';
import Grid from "../../components/Grid"
import { filterProduct } from '../../Context/Context';
import ProductCard from '../../components/ProductCard';
import "./Products.scss"
import { useEffect } from 'react';
import Helmet from '../../components/Helmet';
import agent from '../../service/agent';
const banner = "https://mcdn.nhanh.vn/store3/97757/bn/Banner_Mule_1400x600.jpg"


const Products = ({path, brumb, index, id}) => {
  const crumbs = [
    {
      title: brumb,
      href: path
    }
  ]
  const [products, setProducts] = useState({});
  const [rangePrice, setRangePrice] = useState({})
  const getProduct = useCallback(async () => {
      try{
        const pro = await agent.Product.getProductByCate(id)
        setProducts(pro.productsList)
      }
      catch(err){
        setProducts({})
      }
  }, [id])
  const handleFilterProduct = (filter) => {
    setRangePrice(filter)
  }
  useEffect(() => {
    getProduct()
  }, [getProduct])
  return (
    <Helmet title = {brumb}>
    <filterProduct.Provider value = {{ handleFilterProduct}}>
        <Banner src = {banner}  />
        <Breadcrumb crumbs = {crumbs} />
        <div className="container content" >
          <SideBar index = {index}  />
          <div className="content--list--product">
            {products.length > 0 &&
            <Grid col = {3} mdCol = {2} gap = {20}>
              {
                products.map((item, index) => (
                  <ProductCard key = {index} product = {item} img = {item.image[0]}  />
                ))
              }
            </Grid>
            
            }
          {/* <div className="pagination">
            <Stack spacing={2}>
              <Pagination count={Math.floor(products.length / 10) + 1} color="secondary" onChange={(e) => handleChangePage(e.target.textContent)} />
            </Stack>
          </div> */}
          </div>
        </div>
    </filterProduct.Provider>
    </Helmet>
  )
}

export default Products