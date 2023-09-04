import React, { useEffect, useState } from "react";
import "./Product.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = ({ id }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id: paramId } = useParams();
  const DB_URL = `http://localhost:8080/api/products`;
  const [dataProduct, setDataProduct] = useState();
  const dispatch = useDispatch ()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${DB_URL}`);
        setDataProduct(response.data.products.docs.find(products => products._id === (id || paramId)));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [DB_URL, id, paramId]);

  return (
    <>
      {dataProduct && (
        <div className="product" key={dataProduct._id}>
          <div className="left">
            <div className="images">
              <img src={dataProduct.imgs[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={dataProduct.imgs[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
            <div className="mainImage">
              <img src={dataProduct.imgs[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{dataProduct.name}</h1>
            <span>Type: T-shirt</span>
            <span className="price">{dataProduct.price} VND</span>
            <p>
              {dataProduct.desc}
            </p>
            <div className="quantity"><button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="add" onClick={()=>dispatch(addToCart(
              {
              id: dataProduct._id,
              img: dataProduct.imgs[0],
              quantity: quantity,
              name: dataProduct.name,
              desc: dataProduct.desc,
              price: dataProduct.price,

            }
            ))}>
              <AiOutlineShoppingCart /> Add to cart
            </div>
            <div className="link">
              <div className="item">
                <MdFavorite /> Add to my list
              </div>
            </div>
            <div className="info">
              <span>Type: T-shirt</span>
              <span>Product Type: T-shirt</span>
              <span>Tag: T-shirt</span>
            </div>
            <hr />
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>Additional info</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
