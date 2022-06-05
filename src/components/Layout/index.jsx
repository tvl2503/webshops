import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'
import Nike from '../../pages/Nike'
import Footer from './Footer'
import Header from './Header'
const Layout = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/nike" element={<Nike />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Layout