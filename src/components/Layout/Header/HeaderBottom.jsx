import React,{ useRef } from 'react'
import { Link } from 'react-router-dom';
const logo  = "http://t0320.store.nhanh.vn/img/nhanh.png";
const mainNav = [
    {
        name: "Giày Nike",
        path: "nike"
    },
    {
        name: "Giày adidas",
        path: "adidas", 
    },
    {
        name: "Giày mlb",
        path: "mlb", 
    },
    {
        name: "Phụ kiện",
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
    const menuToggle = () => menuRef.current.classList.toggle('active')
  return (
    <div className="header__bottom">
            <div className="header__bottom__mobile-toggle"  onClick={menuToggle}>
                <i className="far fa-bars"></i>
            </div>
            <div className="header__bottom_img">
                <Link to = "/" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="header__bottom__menu" ref = {menuRef}>
                <div className="header__bottom__menu__close"  onClick={menuToggle} >
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
                    <div key = {index} className="header__bottom__menu__item">
                        <Link to = {item.path}>
                            {item.name}
                        </Link>
                    </div>
                ))}
                <div className="header__bottom__menu__user">
                    <div className="header__bottom__menu__user__item">
                        Đăng nhập
                    </div>
                    <div className="header__bottom__menu__user__item">
                        Đăng ký
                    </div>
                </div>
            </div>
            <div className="header__bottom__cart">
                <i className="fal fa-shopping-cart"></i>
            </div>
        </div>
  )
}

export default HeaderBottom