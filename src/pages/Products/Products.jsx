import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import picture1 from "..//../Slide/pexels-terje-sollie-298863.jpg";
import Card from "../../components/Card/Card";
import List from "../../components/List/List";
import axios from "axios";

const DB_URL = "http://localhost:8080/api/products";

const Products = () => {
  const catId = parseInt(useParams().id);
  const { categoryId, paramId} = useParams()
  const [data, setData] = useState([]);
  const [select,setSelect] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${DB_URL}`);
       
        setData(res.data.products.docs);
        
    
    
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <div className="products">

      <div className="right">
        <img className="catImg" src={picture1} alt="" />
        <List select = {select} />
      </div>
      
    </div>
    </>
  );
};


export default Products;






