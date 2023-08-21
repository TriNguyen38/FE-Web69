import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open ,setOpen] = useState (false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Nữ
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Nam
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Trẻ Em
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Node-Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Trang Chủ
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Giới Thiệu
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Liên Hệ
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Cửa Hàng
            </Link>
          </div>
          <div className="icons-Navbar">
            <AiOutlineSearch />
            <VscAccount />
            <div className="cart" onClick={()=> setOpen(!open)}>
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
