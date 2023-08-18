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
// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import office1 from "assets/images/officeimg/Office (6).jpg";
import office2 from "assets/images/officeimg/Office (8).jpg";
import office3 from "assets/images/ABC2.jpg";

import { useState, useEffect } from 'react'
const img = 'http://localhost:5000/uploads/'

function Information () {
  const [getdata, setData] = useState('')

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/get_about_company_info`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('ch',data.data);
        setData(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi()
  }, [])


  const [getdata1, setData1] = useState('')
  const fetchdatawithapi1 = () => {
    fetch(`http://localhost:5000/get_about_company_info_o`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('ch',data.data);
        setData1(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi1()
  }, [])

  return (
    <>
    <MKBox component='section' py={12}>
      <Container>
        <MKTypography variant='h3'>WHY HIRE US</MKTypography>
        <MKTypography variant='h6'>
          let us take a look at some of the most important benefits of hiring the offshore software
          development company. Here we go…
        </MKTypography>
       <Grid container spacing={6} alignItems='center'>
          <Grid item xs={15} lg={7}>
            <Grid container justifyContent='flex-start'>
            {getdata && getdata.map(user => (
              <Grid item xs={12} md={6}>
                   <MKBox mb={5}>
                   <DefaultInfoCard
                    icon={user.icons}
                    title= {user.title}
                    description= {user.description}
                  />
                </MKBox>
              </Grid>
               ))}
            </Grid>
          </Grid>
          <Grid item xs={5} lg={6} sx={{ ml: "auto", mt: -80 }}>
          {getdata1 && getdata1.map(user => (
            <CenteredBlogCard
              image={img + user.image}
              title={user.title}
              description= {user.description}
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
            ))}
          </Grid>
          {/* <Grid item xs={12} lg={5.5} sx={{ mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={office2}
              title='Meeting-Rooms'
              description=' Provides you with top class services and facilities required to help you achieve maximum productivity.'
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid> */}
          {/* <Grid item xs={12} lg={6.2} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={office3}
              title=' OUR Building '
              description='Plot No 22, Sector 135, Noida, Uttar Pradesh 201304'
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid> */}
          
        </Grid>
        
      </Container>
      
      </MKBox>
    </>   
  );
}

export default Information;
