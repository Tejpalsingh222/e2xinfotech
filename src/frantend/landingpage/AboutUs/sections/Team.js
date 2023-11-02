
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useState, useEffect } from 'react'
const img = 'http://localhost:5000/uploads/'
function Team() {
  const [getdata, setData] = useState('')

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/executive_team`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('sssssssssssssssssssssss',data.data);
        setData(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi()
  }, [])

  const page_name='About-team';
  const [Information, setUsers] = useState([])
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
    items: 2
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
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
            {serviceheading.page_heading}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            {serviceheading.page_paragraph}
            </MKTypography>
          </Grid>
        </Grid>
        
        <Carousel showDots={true} responsive={responsive} itemAriaLabel='dineideindie'>
        {getdata && getdata.map(user => (
            <Grid container spacing={3}>
          <Grid item xs={12} lg={15}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={img + user.team_image}
                name={user.excutive_title}
                position={{ color: "info", label:`${user.team_position}` }}
                description={user.excutive_intro}
              />
            </MKBox>
          </Grid>
        </Grid>

          ))}
            </Carousel>
      </Container>
    </MKBox>
  );
}

export default Team;
