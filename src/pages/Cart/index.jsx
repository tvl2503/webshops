import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import "./Cart.scss"
const crumbs = [
    {
        title: "Giỏ hàng",
        path: "cart"
    }
]
const thead = ["Sản phẩm", "Thông tin sản phẩm", "Đơn giá", "Số lượng", "Thành tiền", "Xóa"]
const Cart = () => {
  return (
    <div className='cart container'>
        <Breadcrumb crumbs = {crumbs} />
        <div className="cart__main">
            <div className="cart__main__thead">
                {
                    thead.map((item, index) => (
                    <div key = {index} className="cart__main__thead__item">
                        {item}
                    </div>
                    ))
                }
            </div>
            <div className="cart__main__tbody">
            <div className="cart__main__tbody__item">
                <img src="https://traffic-edge37.cdn.vncdn.io/nvn/ncdn/store3/97757/ps/20220316/16032022040342_49_1.jpeg" alt="" />
            </div>
            <div className="cart__main__tbody__item">
                <Link to = "">
                    Giày Nike Air Force 1 Low Shadow Sunset Pulse (W)
                </Link>
            </div>
            <div className="cart__main__tbody__item">
                <span>2999000</span>
            </div>
            <div className="cart__main__tbody__item">
                <input type="text" value={1} />
            </div>
            <div className="cart__main__tbody__item">
                <span>2999000</span>

            </div>
            <div className="cart__main__tbody__item">
                <i className="far fa-trash-alt"></i>
            </div>
            </div>
            <div className="cart__main__checkout">
                <div className="total">
                    Tổng tiền: <span>2990000</span>
                </div>
                <div className="cart__button">
                    <button>Tiến hành thanh toán</button>
                    <Link to = "/">Tiếp tục mua hàng</Link>
                </div>
            </div>
        </div>
        {/* <div className="cart__empty">
            <p>Giỏ hàng hiện tại của bạn chưa có sản phẩm nào</p>
        </div> */}
    </div>
  )
}

export default Cart