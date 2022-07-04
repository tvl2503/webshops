import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'
import Nike from '../../pages/Nike'
import NotFound from '../../pages/NotFound'
import Login from '../../pages/User/Login'
import Register from '../../pages/User/Register'
import Footer from './Footer'
import Header from './Header'
import { listProduct } from '../../assets/data/product'
import Contact from '../../pages/Contact'
import ProductViewModal from '../ProductViewModal'
import Cart from '../../pages/Cart'
import Product from '../../pages/Product'
const Layout = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path = "/" element={<Home />} />
            {listProduct.map((item, index) => (
              <Route 
                key = {index} 
                path = {item.path} 
                element={<Nike  path = {item.path} listProduct = {item.products} brumb = {item.title} index = {index} />} />
            ))}
            <Route path = "contact" element ={<Contact />} />
            <Route path = "cart" element ={<Cart />} />
            <Route path='product' element = {<Product />} />
            <Route path = "user">
              <Route index = {true} element = {<NotFound/>} />
              <Route path = "login" element = {<Login />} />
              <Route path = "register" element = {<Register />} />
            </Route>
            <Route path = "*" element = {<NotFound/>} />
        </Routes>
        <Footer />
        <ProductViewModal />
    </BrowserRouter>
  )
}

export default Layout