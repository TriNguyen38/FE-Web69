import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
import picture1 from '..//../Slide/pexels-terje-sollie-298863.jpg';
import picture2 from '..//../Slide/pexels-ryan-holloway-242829.jpg';
import picture3 from '..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg';
const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src={picture1} alt="" />
          <button>
            <Link className="link" to='products/1'>Sale</Link>
          </button>
        </div>
        <div className="row">
        <img src={picture2} alt="" />
          <button>
            <Link className="link" to='products/1'>Nữ</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src={picture2} alt="" />
          <button>
            <Link className="link" to='products/1'>Nam</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src={picture3} alt="" />
          <button>
            <Link className="link" to='products/1'>Trẻ Em</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img src={picture1} alt="" />
          <button>
            <Link className="link" to='products/1'>New Arrival</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">  <img src={picture3} alt="" />
          <button>
            <Link className="link" to='products/1'>Gìay</Link>
          </button></div>
      </div>
    </div>
  )
}

export default Categories