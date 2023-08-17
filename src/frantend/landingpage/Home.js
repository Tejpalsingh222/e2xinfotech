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
import Card from "@mui/material/Card";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import QuiltedImageList from "frantend/components/QuiltedImageList";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import MKmsg from "components/MKmsg";
import OurServices from "components/OurServices";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";
import Client from "components/Client";
import Carousel from "frantend/components/Carousel";
import  Fade from "@mui/material/Fade";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/banner2.jpg";

import { useState,useEffect } from "react";
const img = 'http://localhost:5000/uploads/';
function Home() {

    const [getdata,setData]=useState('');
   
    const fetchdatawithapi=()=>{
        fetch('http://localhost:5000/get_home_page_config') .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data.data)
          })
    }
    useEffect(()=>{
        fetchdatawithapi();
    },[]);

    const [getdata1,setData1]=useState([]);
    const fetchUserData = () => {
      fetch("http://localhost:5000/getpdd")
        .then(response => response.json()).then(json => json.data)
        .then(data => {
          console.log('jjjjjjj',data)
          setData1(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])
    

    return (
        <>
            <DefaultNavbar
                routes={routes}
                // action={{
                //     type: "external",
                //     route: routes[0].collapse[1].collapse[0].route,
                //     label: "login",
                //     color: "info",
                // }}
                sticky
            />
           {getdata && getdata.map((user)=>(
          
            <MKBox
                minHeight="75vh"
                width="100%"
               
                sx={{
                    backgroundImage: `url(${img+user.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                 
                <Container>
<Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                        <MKTypography
                            variant="h2"
                            color="white"
                            backgroundColor="text.disabled"
                            mt={-6}
                            mb={1}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                                
                            })}
                        >
                          {user.title}
                        </MKTypography>
                        <MKTypography
                            variant="h4"
                            color="white"
                            backgroundColor="text.disabled"
                            textAlign="center"
                            px={{ xs: 6, lg: 12 }}
                            mt={1}
                        >
                          {user.description}
                        </MKTypography>

                    </Grid>

                </Container>
                
            </MKBox>
          ))}
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Counters />
                <Information />
                <MKmsg/>
                <OurServices/>
                {/* <DesignBlocks /> */}
                {/* <Pages /> */}
                <Client/>
                 <Carousel/>
                <Container sx={{ mt: 6 }}>
                    <BuiltByDevelopers />
                </Container>
                <Testimonials />
                <Container>
                
                    <Grid container spacing={3} mt={-10}>
                    {getdata1 && getdata1.map((user)=>(
                        <Grid item xs={12} lg={4}>
                            <FilledInfoCard
                                variant="gradient"
                                color="info"
                                icon={user.pdd_image}
                                title={user.pdd_heading}
                                description={user.pdd_paragraph}
                              
                            />
                        </Grid>
                       ))}
                        
                        
                    </Grid>
              
                </Container>
                {/* <Testimonials /> */}
                {/* <Download /> */}
                <MKBox pt={18} pb={6}>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                                    Thank you for your support!
                                </MKTypography>
                                <MKTypography variant="body1" color="text">
                                    We deliver the best centric websites and result driven digital marketing campaigns
                                </MKTypography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                my={{ xs: 5, lg: "auto" }}
                                mr={{ xs: 0, lg: "auto" }}
                                sx={{ textAlign: { xs: "center", lg: "right" } }}
                            >
                                <MKSocialButton
                                    component="a"
                                    // href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                                    target="_blank"
                                    color="twitter"
                                    sx={{ mr: 1 }}
                                >
                                    <i className="fab fa-twitter" />
                                    &nbsp;Tweet
                                </MKSocialButton>
                                <MKSocialButton
                                    component="a"
                                    // href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                                    target="_blank"
                                    color="facebook"
                                    sx={{ mr: 1 }}
                                >
                                    <i className="fab fa-facebook" />
                                    &nbsp;Share
                                </MKSocialButton>
                                <MKSocialButton
                                    component="a"
                                    // href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                                    target="_blank"
                                    color="pinterest"
                                >
                                    <i className="fab fa-pinterest" />
                                    &nbsp;Pin it
                                </MKSocialButton>
                            </Grid>
                        </Grid>
                    </Container>
                </MKBox>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
            
        </>
        
    );
}
export default Home;


