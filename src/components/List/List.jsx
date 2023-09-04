
import React, { useEffect, useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

const List = () => {
  const DB_URL = "http://localhost:8080/api/categories";
  const [showData, setShowData] = useState([]);
  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${DB_URL}/${_id}`);
        setShowData(response.data.datas.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [DB_URL, _id]);

  return (
    <>
      {showData && (
        <div className="list" key={showData._id}>
          {/* {showData.map((item)=>(<Card 
          item={{ id: item._id }} 
          key={item._id}/>))} */}
          {showData.map((item) => (
            <Card
              key={item._id}
              item={{
                id: item._id,
                img: item.imgs[0],
                name: item.name,
                isNew: true,
                oldPrice: item.oldPrice,
                price: item.price,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default List;


