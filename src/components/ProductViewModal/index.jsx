import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeProductModal} from './productModalSlice'
import numberWithVND from '../../utils/numberwithvnd'
import "./ProductViewModal.scss"
const ProductViewModal = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.productModal)
    const [size, setSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const removeModal = () => {
        dispatch(removeProductModal())
    }
    const handleIncrement = () => {
        setQuantity(state => Number(state) + 1)
    }
    const handleDecrement = () => {
        setQuantity(state => state  > 1 ? state - 1 : state)
    }
    useEffect(() => {
        setSize(null);
        setQuantity(1);
    }, [product])
  return (
    <>
        {
            product && 
            <div className='product-view__modal'>
                <div className="product-view__modal__backdrop" onClick={removeModal} ></div>
                <div className="product-view__modal__content">
                    <div className="close--modal" onClick={removeModal}>
                        <i class="far fa-times"></i>
                    </div>
                    <div className="product-view__modal__content__img">
                        <img src = {product.image[0]} />
                    </div>
                    <div className="product-view__modal__content__main">
                        <div className="title">
                            <h1>
                            {product.name}
                            </h1>
                        </div>
                        <div className="status">
                            <span>Tình trạng: còn hàng</span>
                            
                        </div>
                        <div className="price">
                            {numberWithVND(product.price)}
                        </div>
                        <div className="size">
                            <div className="size__header">SIZE</div>
                            <div className="size__list">
                                {product.size.map((item, index) => (
                                    <div key = {index} className={`size__list__item ${item === size ? 'active': ''}`} onClick = {() => setSize(item)}>{item}</div>
                                ))}
                            </div>
                        </div>
                        <div className="input--quantity">
                            <div className="btn__decrement"  onClick={handleDecrement}>
                            <i class="fal fa-minus"></i>
                            </div>
                            <input type="text" value={quantity} onChange = {(e) => setQuantity(e.target.value)} />
                            <div className="btn__increment" onClick={handleIncrement}>
                                <i class="fal fa-plus"></i>
                            </div>
                        </div>
                        <button className='btn--add--cart'>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default ProductViewModal