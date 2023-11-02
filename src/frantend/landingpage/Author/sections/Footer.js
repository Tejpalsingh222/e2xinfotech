import { Height } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useState,useEffect } from "react";

function Footer() {

  const [getdata,setData]=useState('');
  const fetchUserData = () => {
    fetch("http://localhost:5000/get_social_media/")
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        setData(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  return (
<MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <section id="topbar">

<div className="container">

    <div className="row">

        <div className="col-lg-12 ">

            <div className="contact-info pull-left">

                <ul>

                    <h5><b>Mon - Fri : 9:30 AM - 7:00 PM ,Sat - Sun:Closed</b></h5>
                   
                </ul>

            </div>
        </div>

    </div>

</div>

</section>
          <MKBox ml={-1}><img height={60} width={280} src="http://localhost:5000/uploads/about_image-1684327934299.png" alt="logo" >
            </img></MKBox>
            <ul>
<h5><b>Company Established Year 2010</b></h5>

</ul>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/pages/landing-pages/main-page"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/pages/landing-pages/about-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/pages/landing-pages/contact-us"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  Contact
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/pages/landing-pages/author"
                  target="_blank"
                  rel="noreferrer"
                >
                   Blog
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
            Developed By: E2X INFOTECH Pvt. Ltd 
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <MKTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
            E2X Infotech is a core technology company. We believe in innovating. We develop all kinds of websites - corporate websites
            </MKTypography>
            <MKBox  display="flex" justifyContent="center"  alignItems="center">
            {getdata && getdata.map((service)=>(
              <MKTypography component="a" variant="h2" color="blue" href={service.link}  mr={3}  ml={5}>
                <i className={service.icon} />
              </MKTypography>
              ))}
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;


 


