
import ReactCardSlider from "react-card-slider-component";
import React, {useEffect, useState } from "react";
import "./carouselss.scss";


function Carouselss() {
  const [getdata,setData]=useState([]);
  const fetchUserData = () => {
    fetch("http://localhost:5000/getCardCarousel")
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('jjjjjjj',data)
        setData(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      <ReactCardSlider className="sdd" flex="1"  slides={getdata} />
    </div>
  );
 
}

export default Carouselss;

