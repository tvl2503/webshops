import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'
import Nike from '../../pages/Nike'
import NotFound from '../../pages/NotFound'
import Login from '../../pages/User/Login'
import Register from '../../pages/User/Register'
import Footer from './Footer'
import Header from './Header'
const Layout = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/nike" element={<Nike />} />
            <Route path = "user">
              <Route index = {true} element = {<NotFound/>} />
              <Route path = "login" element = {<Login />} />
              <Route path = "register" element = {<Register />} />
            </Route>
            <Route path = "*" element = {<NotFound/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Layout