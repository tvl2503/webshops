import React from 'react'

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
                    <div className="header__top__user__item">
                        Đăng nhập
                    </div>
                    <div className="header__top__user__item">
                        Đăng ký
                    </div>
            </div>
        </div>
  )
}

export default HeaderTop