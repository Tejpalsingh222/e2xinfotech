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
// import Icon from "@mui/material/Icon";

// import bgImage from "assets/images/bg-coworking.jpeg";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import React, {useEffect, useState } from "react";
const img = 'http://localhost:5000/uploads/';
function BuiltByDevelopers() {
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";
    const [getdata,setData]=useState([]);
    const fetchUserData = () => {
      fetch("http://localhost:5000/getExpert")
        .then(response => response.json()).then(json => json.data)
        .then(data => {
          console.log('jjjjjjjkkkkkk',data)
          setData(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])
  return (
    <>
     {getdata && getdata.map((user)=>(
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${img+user.expert_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
      {/* {getdata && getdata.map((user)=>( */}
        <Grid container item xs={12} lg={10} sx={{ ml: { xs: 0, lg: 6 } }} >
          {/* <MKTypography variant="h4" color="white" fontWeight="bold">
          {user.heading}
          </MKTypography> */}
          <MKTypography variant="h1" color="white" mb={2}>
         13 {user.heading}
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
          {user.paragraph}
          </MKTypography>
        </Grid>
          {/* ))} */}
      </Container>
    </MKBox>
     ))}
     </>
  );
}
export default BuiltByDevelopers;
