import React, { useCallback } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'
import Products from '../../pages/Products'
import NotFound from '../../pages/NotFound'
import Login from '../../pages/User/Login'
import Register from '../../pages/User/Register'
import Footer from './Footer'
import Header from './Header'
import Search from '../../pages/Search'
import Contact from '../../pages/Contact'
import ProductViewModal from '../ProductViewModal'
import Cart from '../../pages/Cart'
import Product from '../../pages/Product'
import ProductDetail from '../../pages/ProductDetail'
const Layout = ({category}) => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path = "/" element={<Home category = {category}  />} />
            {category.map((item, index) => (
              <Route 
                key = {index} 
                path = {item.path} 
                element={<Products  path = {`/${item.path}`} id = {item._id} brumb = {item.name} index = {index} />} />
            ))}
            <Route path = "contact" element ={<Contact />} />
            <Route path = "cart" element ={<Cart />} />
            <Route path='product'>
              <Route index = {true} element={<Product />} />
              <Route path = ":id" element = {<ProductDetail />} />
            </Route> 
            <Route path = "user">
              <Route index = {true} element = {<NotFound/>} />
              <Route path = "login" element = {<Login />} />
              <Route path = "register" element = {<Register />} />
            </Route>
            <Route path = "search" element = {<Search />} />
            <Route path = "*" element = {<NotFound/>} />
        </Routes>
        <Footer />
        <ProductViewModal />
    </BrowserRouter>
  )
}

export default Layout