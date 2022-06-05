import React from 'react'
import Grid from '../../Grid'
import { Link } from 'react-router-dom'
import "./Footer.scss"
import { imgVis } from '../../../assets/data/imgVis'
const companyInfo = ["Hà Thành Plaza số 102, Thái Thịnh, Đống Đa, Hà Nội",
  "1900.2812",
  "contact@nhanh.vn"
]
const logo  = "http://t0320.store.nhanh.vn/img/nhanh.png";

const categoryFeatured = ["Giầy bóng rổ", "Giầy chạy bộ", "Phụ kiện"];
const companyPolicy = ["Vận chuyển và giao hàng", "chính sách bán hàng", "Liên hệ chúng tôi"];
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <Grid col = {4} mdCol = {2} smCol = {1}>
            <div className="footer__top">
              <div className="footer__top__title">
                <img src = {logo} alt = "" />
              </div>
              <div className="footer__top__content">
                {companyInfo.map((item, index) => (
                  <div key = {index} className="footer__top__content__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__top">
              <div className="footer__top__title">
                <h2>Danh mục nổi bật</h2>
              </div>
              <div className="footer__top__content">
                {categoryFeatured.map((item, index) => (
                  <div key = {index} className="footer__top__content__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__top">
              <div className="footer__top__title">
              <h2>Chính sách công ty</h2>
              </div>
              <div className="footer__top__content">
                {companyPolicy.map((item, index) => (
                  <div key = {index} className="footer__top__content__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="footer__top">
              <div className="footer__top__title">
                <p>Đăng ký email và chúng tôi sẽ gửi cho bạn những thông tin mới nhất</p>
                <div className="form--email">
                  <form action="">

                  <input type="text" placeholder='Email của bạn' />
                  <button type='submit'>Gửi</button>
                  </form>
                </div>
              </div>
              <div className="footer__top__content">
                  <div className="footer__top__content__svg">
                    {imgVis.map((item, index) => (
                      <div className="svg" key = {index}>
                        <img src={item.src} alt="" />
                      </div>
                    ))}
                  </div>
              </div>
            </div>
        </Grid>
        <div className="footer__bottom">
          <span>@Copyright 2022 all rights reserved. Thiết kế bởi TVL</span>
          <div className="footer__list__menu">
            <Link to={"/"}>Giới thiệu</Link>
            <Link to={"/"}>Liên hệ</Link>
            <Link to={"/"}>Blog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer