
import ReactCardSlider from "react-card-slider-component";
import React, {useEffect, useState } from "react";
import "./carousel.scss";
// import team1 from "assets/images/Ronald.jpg";
// import team2 from "assets/images/Mourad.jpg";
// import team3 from "assets/images/Torre.jpg";
// import team4 from "assets/images/Hayden.jpg";
// import team5 from "assets/images/kylie.jpg";
// import team6 from "assets/images/json.jpg";


function Carousel() {
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
      <ReactCardSlider className="sdd" slides={getdata} />
    </div>
  );
 
}

export default Carousel;

