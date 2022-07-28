import React,{ useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
const logo  = "https://res.cloudinary.com/fef/image/upload/v1656410485/nhanh_fycbje.png";
const mainNav = [
    {
        name: "Giày Nike",
        path: "nike"
    },
    {
        name: "Giày Adidas",
        path: "adidas", 
    },
    {
        name: "Giày MLB",
        path: "mlb", 
    },
    {
        name: "Phụ Kiện",
        path: "phu-kien", 
    },
    {
        name: "Tin tức chung",
        path: "tin-tuc-chung", 
    },
    {
        name: "Liên hệ",
        path: "contact", 
    },
]
const HeaderBottom = () => {
    const menuRef = useRef(null)
    const menuAdd = () => menuRef.current.classList?.add('active')
    const menuClose = () => menuRef.current.classList?.remove('active')
  return (
    <div className="header__bottom">
            <div className="header__bottom__mobile-toggle"  onClick={menuAdd}>
                <i className="far fa-bars"></i>
            </div>
            <div className="header__bottom__img">
                <Link to = "/" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="header__bottom__menu" ref = {menuRef}>
                <div className="header__bottom__menu__close"  onClick={menuClose} >
                    <p>close</p>
                    <i className="fal fa-times"></i>
                </div>
                <div className="header__bottom__menu__search">
                    <input type="text" placeholder='search' />
                    <button>
                        <i className="fal fa-search"></i>
                    </button>
                </div>
                {mainNav.map((item, index) => (
                    <div key = {index} className="header__bottom__menu__item" onClick={menuClose}>
                        <Link to = {item.path} >
                            {item.name}
                        </Link>
                    </div>
                ))}
                <div className="header__bottom__menu__user" onClick={menuClose}>
                    <Link to = "/user/login">
                        <div className="header__bottom__menu__user__item">
                            Đăng nhập
                        </div>
                    </Link>
                    <Link to = "/user/register">

                        <div className="header__bottom__menu__user__item">
                            Đăng ký
                        </div>
                    </Link>
                </div>
            </div>
            <div className="header__bottom__cart">
                <Link to = "cart">
                    <i className="fal fa-shopping-cart"></i>
                </Link>
            </div>
        </div>
  )
}

export default HeaderBottom