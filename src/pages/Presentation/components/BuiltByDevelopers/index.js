
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// import bgImage from "assets/images/bg-coworking.jpeg";
import Carousel from 'react-multi-carousel';

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

    
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Carousel responsive={responsive} itemAriaLabel='dineideindie'>
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
      
        <Grid container item xs={12} lg={10} sx={{ ml: { xs: 0, lg: 6 } }} >
          <MKTypography style={{ textOverflow: "ellipsis", overflow: "hidden" }} variant="h2" color="white" mb={2}>
          {user.heading}
          </MKTypography>
          <MKTypography  style={{ textOverflow: "ellipsis", overflow: "hidden" }} variant="body1" color="white" opacity={0.8} mb={2}>
          {user.paragraph}
          </MKTypography>
        </Grid>
       
      </Container>
    </MKBox>
     ))}
     </Carousel>
     </>
  );
}
export default BuiltByDevelopers;
