import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import {updateToCartById} from '../../service/cart/cartSlice'
import { toast } from 'react-toastify';
import numberWithVND from "../../utils/numberwithvnd";
import "./Cart.scss";

const crumbs = [
  {
    title: "Giỏ hàng",
    path: "cart",
  },
];
const thead = [
  "Sản phẩm",
  "Thông tin sản phẩm",
  "Đơn giá",
  "Số lượng",
  "Thành tiền",
  "Xóa",
];
const Cart = () => {
    const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const handleUpdate = (productId, type,size) => {
    dispatch(updateToCartById({productId, type, size}))
    toast.success("Thành công")
    
  }
  return (
    <div className="cart container">
      <Breadcrumb crumbs={crumbs} />
      <table className="cart__main">
      <thead>
        <tr className="cart__main__thead">
            {thead.map((item, index) => (
            <th key={index} className="cart__main__thead__item">
                {item}
            </th>
            ))}
        </tr>
      </thead>
    <tbody>
    
        {cart.products.map((item, index) => (
          <tr className="cart__main__tbody" key ={index}>
            <td className="cart__main__tbody__item">
              <img
                src={item.img}
                alt=""
              />
            </td>
            <td className="cart__main__tbody__item name">
              <Link to = {`/product/${item.productId}`}>
               {item.name} <h4>(Size {item.size})</h4>
              </Link>
            </td>
            <td className="cart__main__tbody__item price">
              <span>{numberWithVND(item.price)}</span>
            </td>
            <td className="cart__main__tbody__item input">
                <div className="input__quantity">
                    <div className="input--minus" onClick={() => handleUpdate(item.productId,'minus', item.size)}>-</div>
                    <input type="text" value={item.quantity} disabled/>
                    <div className="input--plus" onClick={() => handleUpdate(item.productId,'plus', item.size)}>+</div>
                </div>
            </td>
            <td className="cart__main__tbody__item">
              <span>{numberWithVND(item.quantity*item.price)}</span>
            </td>
            <td className="cart__main__tbody__item">
                <div className="remove" onClick={() => handleUpdate(item.productId,'remove', item.size)}>

              <i className="far fa-trash-alt" ></i>
                </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="cart__main__checkout">
        <div className="total">
          Tổng tiền: <span>{numberWithVND(cart.total)}</span>
        </div>
        <div className="cart__button">
          <button>Tiến hành thanh toán</button>
          <Link to="/">Tiếp tục mua hàng</Link>
        </div>
      </div>
      {/* <div className="cart__empty">
            <p>Giỏ hàng hiện tại của bạn chưa có sản phẩm nào</p>
        </div> */}
    </div>
  );
};

export default Cart;
