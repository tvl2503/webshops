import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const Header = () => {
  const headerRef = useRef(null)
  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        headerRef.current.classList.add("shrink")
      }
      else {
        headerRef.current.classList.remove("shrink")
    }
    })
  })
  return (
    <div class = "header" ref={headerRef}>
        <div className="container">
        <HeaderTop />
        <HeaderBottom />
        </div>
    </div>
  )
}

export default Header