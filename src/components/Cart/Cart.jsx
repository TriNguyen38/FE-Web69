import React from 'react'
import './Cart.css'
import picture1 from "..//../Slide/pexels-terje-sollie-298863.jpg";
import picture2 from "..//../Slide/pexels-ryan-holloway-242829.jpg";
import picture3 from "..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg";
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  const data =[
    {
      id: 1,
      img: picture1,
      img2: picture2,
      title: "abc",
      desc: "abca23424adad52",
      isNew: true,
      oldPrice: 12,
      price: 10,
    },
    {
      id: 2,
      img: picture2,
      title: "def",
      desc: "defafa25235235af",
      isNew: true,
      oldPrice: 10,
      price: 8,
    },
  ]
  return (
    <div className='cart-inside'>
      <h1>Sản phẩm đang trong giỏ hàng</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <AiFillDelete className='delete-icon'/>
        </div>
        ))}
        <div className="total">
          <span>Tổng Cộng</span>
          <span>$546</span>
          </div>
          <button>Check out</button>
          <span className='reset'>reset cart</span>
    </div>
  )
}

export default Cart