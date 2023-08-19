import React, { useState } from 'react'
import './Product.css'
import picture1 from '..//../Slide/pexels-terje-sollie-298863.jpg';
import picture2 from '..//../Slide/pexels-ryan-holloway-242829.jpg';
import picture3 from '..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'

const Product = () => {
  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const images = [
    picture1, picture2, picture3
  ]
  return (
    <div className='product'>
<div className="left">
  <div className="images">
    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
  </div>
  <div className="mainImage">
    <img src={images[selectedImg]} alt="" />
  </div>
</div>
<div className="right">
  <h1>Title</h1>
    <span>Type: T-shirt</span>
  <span className='price'>200.000 VND</span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex, sed excepturi sunt earum adipisci atque ipsum numquam, a recusandae quis quas quo. Mollitia assumenda commodi sed quasi quos architecto.</p>
  <div className="quantity">
    <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev - 1)}>-</button>
    {quantity}
    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
  </div>
  <div className="add">
    <AiOutlineShoppingCart/>Add to cart
  </div>
  <div className="link">
    <div className="item">
    <MdFavorite/> Add to my list
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
  )
}

export default Product