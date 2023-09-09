import React, { useEffect, useState } from "react";
import "./Cart.css";
import picture1 from "..//../Slide/pexels-terje-sollie-298863.jpg";
import picture2 from "..//../Slide/pexels-ryan-holloway-242829.jpg";
import picture3 from "..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products)
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cart-inside">
      <h1>Sản phẩm đang trong giỏ hàng</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <AiFillDelete
            className="delete-icon"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>Tổng Cộng</span>
        <span>${totalPrice()}</span>
      </div>
      <Link className="checkBill" to="/payment">
      <button>Check out</button>
      </Link>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        reset cart
      </span>
    </div>
  );
};

export default Cart;



