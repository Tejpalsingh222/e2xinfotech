
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components


import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./posts.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
const img = 'http://localhost:5000/uploads/'
const routeurl='/frantend/landingpage/Author/Feedsection/';
function Places() {
  const [getdata, setData] = useState('')

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/our_blog`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('ourblog page ka data sahi hai',data.data);
        setData(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi()
  }, [])

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div className="bloggg">
    <MKBox component="section" py={5} mt={-18}>
    <Container>
       <Grid container item xs={12}  lg={6}>
          <MKTypography variant="h3" mb={6} sx={{textDecoration: 'underline'}} >
            Check Our activity or events.
          </MKTypography>
       </Grid>
      <Carousel  showDots={true} responsive={responsive} itemAriaLabel='dineideindie'>
        {getdata && getdata.map(user => (
           <Grid container spacing={3}>
           <Grid item xs={12} sm={5} lg={10} pl={16} >
 <TransparentBlogCard  
              image={img + user.blog_image}
              title={<h3><Link to={routeurl+user.id}>{user.blog_title}</Link></h3>}
              // description={user.blog_para}
              
              action='false'  
            />
            </Grid>
            </Grid>
          ))} 
</Carousel>
</Container>
 </MKBox>  
         </div>
  );
}
export default Places;
