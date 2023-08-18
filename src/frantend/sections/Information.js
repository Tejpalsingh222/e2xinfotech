/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { useState,useEffect } from "react";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/mak.jpg";
import bgBack from "assets/images/hoto.jpg";

function Information() {
  const [GetcompInfo,setCompInfo]=useState('');
  const [cardinfo,setInfo]=useState('');
  const [cardinfo1,setInfo1]=useState('');
  const fetchCompanyHisotry=()=>{
    fetch('http://localhost:5000/get_home_comapny_info').then(response => {
        return response.json()
      })
      .then(data => {
        console.log('tejplalbnbnbnn',data.data);
        
        setInfo(data.data[0]);
        setInfo1(data.data[1])
      })
}
useEffect(()=>{
  fetchCompanyHisotry();
},[]);
const fetchCompanyHisotry1=()=>{
  fetch('http://localhost:5000/get_home_comapny_info_o').then(response => {
      return response.json()
    })
    .then(data => {
      console.log('tejplalkdineondie',data.data);
      setCompInfo(data.data)
    })
}
useEffect(()=>{
fetchCompanyHisotry1();
},[]);
console.log('checktejpal',cardinfo);
  return (
    <MKBox component="section" ml={-48} py={4} my={4}>
      <Container>
       <Grid container item xs={11} spacing={25} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={14} lg={5} sx={{ mx: "auto" }}  >
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon={cardinfo.icons}
                title={
                  <>
                   {cardinfo.title}
                  </>
                }
                description={cardinfo.description}
              />
              <RotatingCardBack
                image={bgBack}
                title={cardinfo1.title}
                description={cardinfo.description}
                // action={{
                //   type: "internal",
                //   // route: "/sections/page-sections/page-headers",
                //   label: "start with header",
                // }}
              />
              </RotatingCard>
            
          </Grid>
          <Grid item xs={3} lg={7} sx={{ ml: "auto" }}> 
            <Grid container spacing={3}>
            { GetcompInfo && GetcompInfo.map((user)=>(
              <Grid item xs={10} md={6}>
                <DefaultInfoCard
                  icon={user.icons}
                  title={user.title}
                  description={user.description}
                />
              </Grid>
               ))}
            </Grid>
          </Grid> 
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;