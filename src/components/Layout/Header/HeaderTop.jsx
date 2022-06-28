import React from 'react'
import { Link } from 'react-router-dom'
const HeaderTop = () => {
  return (
    
    <div className="header__top">
            <div className="header__top__info">
                <div className="header__top__info__email">
                    <p>Email:</p>
                    <span>volinhh1804@gmail.com</span>
                </div>
                <div className="header__top__info__hotline">
                    <p>Hotline:</p>
                    <span>0392280138</span>
                </div>
            </div>
            <div className="header__top__search">
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                    <input type="text" placeholder='Tìm kiếm sản phẩm' />
            </div>
            <div className="header__top__user">
                    <Link to = "/user/login">
                        <div className="header__top__user__item">
                            Đăng nhập
                         </div>
                    </Link>
                    
                    <Link to = "/user/register">
                        <div className="header__top__user__item">
                             Đăng ký
                        </div>
                    </Link>
                    
            </div>
        </div>
  )
}

export default HeaderTop