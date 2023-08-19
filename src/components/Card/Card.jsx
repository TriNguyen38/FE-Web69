import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import picture1 from '..//../Slide/pexels-terje-sollie-298863.jpg';
import picture2 from '..//../Slide/pexels-ryan-holloway-242829.jpg';
import picture3 from '..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg';
import List from '../List/List';

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            {item.isNew && <span>New Seasion</span> }
            <img className='main' src={item.img} alt="main" />
            <img className='second' src={item.img2} alt="second" />
          </div>
          <h2>{item.title}</h2>
          <div className="prices">
            <h3>{item.oldPrice} VND</h3>
            <h3>{item.price} VND</h3>
          </div>
        </div>
    </Link>
  )
}

export default Card