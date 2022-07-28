import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button"
import numberWithVND from "../../utils/numberwithvnd"
const ProductContent = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const handleIncrement = () => {
    setQuantity((state) => Number(state) + 1);
  };
  const handleDecrement = () => {
    setQuantity((state) => (state > 1 ? state - 1 : state));
  };
  return (
    <div className="product--detail__content">
      <div className="title">
        <h1>{product.name}</h1>
      </div>
      <div className="category">
        <p>
          Danh mục:
          <Link to="/nike"> Nike</Link>
        </p>
      </div>
      <div className="description">
        <div className="description__title">
          Mô tả:
        </div>
        <div className="description__content">
            {product.description}
        </div>
      </div>
      <div className="price">{numberWithVND(product.price)}</div>
      <div className="size">
        <div className="size__header">SIZE</div>
        <div className="size__list">
          {product.size.map((item, index) => (
            <div
              key={index}
              className={`size__list__item ${item === size ? "active" : ""}`}
            onClick = {() => setSize(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="quantity">
        <div className="quantity__header">Số lượng</div>
        <div className="input--quantity">
          <div className="btn__decrement" onClick={handleDecrement}>
            <i class="fal fa-minus"></i>
          </div>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div className="btn__increment" onClick={handleIncrement}>
            <i class="fal fa-plus"></i>
          </div>
        </div>
      </div>
      <Button type = "submit" disabled = {!size} ><i className="fal fa-cart-plus"></i> Thêm vào giỏ hàng</Button>
    </div>
  );
};

ProductContent.propTypes = {};

export default ProductContent;
