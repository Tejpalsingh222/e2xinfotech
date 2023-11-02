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


import { useState,useEffect } from "react";
const img = 'http://localhost:5000/uploads/';
function OurServices() {
 const page_name='our_services';
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
  const [OurServices, setUsers] = useState([])
    const [serviceheading,setOurServiceHeading]=useState([])

  const fetchSuperHeading=()=>{
    fetch(`http://localhost:5000/super-heading/${page_name}`)
    .then(response=>response.json())
    .then(json=>json.data)
    .then(data=>{
        console.log('superhead',data)
        setOurServiceHeading(data[0])   
    })
   
}
useEffect(()=>{
    fetchSuperHeading()
},[])


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4
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
    // sx={{ width: '70%' }}
    <MKBox component="section" py={5} >
      <Container>
        <Grid container item xs={12} lg={12}>
          <MKTypography variant="h3" mb={6} mt={-10}>
          {serviceheading.page_heading}
          </MKTypography>
          <MKTypography variant="h6" mb={4} mt={-2}>
           {serviceheading.page_paragraph}
          </MKTypography>
        </Grid>
        <Carousel showDots={true}  responsive={responsive} itemAriaLabel='dineideindie'>
        {getdata && getdata.map((service)=>(
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} lg={10} pl={16}>
            <TransparentBlogCard
              image={img+service.service_image}
              title={service.service_title}
              description={service.service_para}
              readmore={service.service_para}
              action={{
              }}
            />
         </Grid>
           </Grid>
             ))}
           </Carousel>
      </Container>
    </MKBox>
  );
}
export default OurServices;
