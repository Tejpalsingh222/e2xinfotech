import { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import axios from "axios";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  const [GetcompHistory,setCompHistory]=useState('');
  const fetchCompanyHisotry = () => {
    axios
	.post('http://localhost/api/api.php', {
		// Data to be sent to the server
	api:'CompanyHistory'
	}).then(response =>{
    // console.log('url',`http://localhost/octo_web_api/e2xweb/carouselDetails.php?route=home_page_config&page_id=${props.title}`)
    // console.log(' denakdindineindinddddddddddddddddddddddddddddddd  ',response.data.http_response)
    setCompHistory(response.data.http_response)
  })
	.catch(function (error) {
		console.error(error);
	});
  }
useEffect(()=>{
  fetchCompanyHisotry();
},[]);
console.log('checktejpallllllllll',GetcompHistory);

  return (
   
    <MKBox component="section" py={5}>
    
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
        { GetcompHistory && GetcompHistory.map((user)=>(
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={user.home_couter}
              suffix="+"
              title={user.title}
              description={user.description}
              />
          </Grid>
          ))}
        </Grid>
      </Container> 
    </MKBox>
  );
}

export default Counters;
