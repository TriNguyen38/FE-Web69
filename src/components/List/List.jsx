import React from "react";
import "./List.css";
import picture1 from "..//../Slide/pexels-terje-sollie-298863.jpg";
import picture2 from "..//../Slide/pexels-ryan-holloway-242829.jpg";
import picture3 from "..//../Slide/pexels-the-lazy-artist-gallery-1342609.jpg";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: picture1,
      img2: picture2,
      title: "abc",
      isNew: true,
      oldPrice: 12,
      price: 10,
    },
    {
      id: 2,
      img: picture2,
      title: "def",
      isNew: true,
      oldPrice: 10,
      price: 8,
    },
    {
      id: 3,
      img: picture3,
      title: "ghi",
      isNew: true,
      oldPrice: 8,
      price: 6,
    },
    {
      id: 4,
      img: picture1,
      title: "jkl",
      isNew: true,
      oldPrice: 6,
      price: 4,
    },
  ];
  return (
    <div className="list">
      {data?.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
