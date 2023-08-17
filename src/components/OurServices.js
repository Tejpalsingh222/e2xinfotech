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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/pexels-pixabay-39284.jpg";
import post2 from "assets/images/pexels-thisisengineering-3912958.jpg";
import post3 from "assets/images/E-commerce.png";
import post6 from "assets/images/pexels-lisa-fotios-1092644.jpg";
import post5 from "assets/images/pexels-tima-miroshnichenko-7567443.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import { useState,useEffect } from "react";
const img = 'http://localhost:5000/uploads/';
function OurServices() {
const [getdata,setData]=useState('');
  const fetchUserData = () => {
    fetch("http://localhost:5000/our_services")
      .then(response => response.json()).then(json => json.data)
      .then(data => {
       
        setData(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    // sx={{ width: '70%' }}
    <MKBox component="section" py={2} >
      <Container>
        <Grid container item xs={12} lg={12}>
          <MKTypography variant="h3" mb={6} mt={-10}>
          OUR SERVICES...
          </MKTypography>
          <MKTypography variant="h6" mb={4} mt={-2}>
            E2X Infotech has the experience creativity and leadership to shape the future of software development with new technologies
          </MKTypography>
        </Grid>
       
        <Grid container spacing={2}>
        {getdata && getdata.map((service)=>(
          <Grid item xs={12} sm={5} lg={2} pl={16}>
            <TransparentBlogCard
              image={img+service.service_image}
              title={service.service_title}
              description={service.service_para}
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          
         
          ))}
           </Grid>
        
         
        
      </Container>
    </MKBox>
  );
}
export default OurServices;
