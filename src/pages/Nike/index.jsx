import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import SideBar from '../../components/SideBar'
import Banner from './Banner';
import Grid from "../../components/Grid"
import { filterProduct } from '../../Context/Context';
import ProductCard from '../../components/ProductCard';
import "./Nike.scss"
import { useEffect } from 'react';
import Helmet from '../../components/Helmet';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const banner = "https://mcdn.nhanh.vn/store3/97757/bn/Banner_Mule_1400x600.jpg"


const Nike = ({path, listProduct, brumb, index}) => {
  const crumbs = [
    {
      title: brumb,
      href: path
    }
  ]
  const [products, setProducts] = useState(listProduct);
  const [page, setPage] = useState(1);
  const handleChangePage = (page) => {
    setPage(page)

  }
  console.log(page);
  const handleFilterProduct = (filter) => {
    setProducts(filter)
  }
  useEffect(() => {
    setProducts(listProduct)
  }, [listProduct])
  return (
    <Helmet title = {brumb}>
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

export default Nike