import React from 'react'
import './Products.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import picture1 from '..//../Slide/pexels-terje-sollie-298863.jpg';
import Card from '../../components/Card/Card';
import List from '../../components/List/List';

const Products = () => {
const catId = parseInt(useParams().id)
const [maxPrice,setMaxPrice] = useState(1000)
const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1'  value={1} />
            <label htmlFor="1">Áo Thun</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2'  value={1} />
            <label htmlFor="1">Áo Sơ-mi</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3'  value={1} />
            <label htmlFor="1">Quần Âu</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Giá (Thấp nhất)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={e=>setSort("desc")} />
            <label htmlFor="desc">Giá (Cao nhất)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src={picture1} alt="" /> 
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products