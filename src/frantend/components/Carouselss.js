
import ReactCardSlider from "react-card-slider-component";
import React, {useEffect, useState } from "react";
import "./carouselss.scss";
import axios from "axios";


function Carouselss() {
  
  const [getdata,setData]=useState([]);
  const fetchUserData = () => {
    axios
	.post('http://localhost/api/api.php', {
		// Data to be sent to the server
	api:'getCardCarousel'
	}).then(response =>{
    // console.log('url',`http://localhost/octo_web_api/e2xweb/carouselDetails.php?route=home_page_config&page_id=${props.title}`)
    // console.log(' denakdindineindinddddddddddddddddddddddddddddddd  ',response.data.http_response)
    setData(response.data.http_response)
  })
	.catch(function (error) {
		console.error(error);
	});
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

