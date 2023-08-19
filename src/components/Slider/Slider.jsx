import React, { useState } from 'react';
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import picture1 from '..//../Slide/pexels-terje-sollie-298863.jpg';
import picture2 from '..//../Slide/pexels-ryan-holloway-242829.jpg';
import picture3 from '..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg';

const Slider = () => {
  const data = [picture1, picture2, picture3];
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    console.log(data)
    if (slideIndex === 0) {
      setSlideIndex(data.length - 1);
      console.log(data.length)
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextSlide = () => {
    console.log(data.length)
    if (slideIndex === data.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
        {data.map((image, index) => (
          <img key={index} className="slide" src={image} alt="" />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="icon" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;