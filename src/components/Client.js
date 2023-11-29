
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useState,useEffect } from "react";

// Material Kit 2 React examples
function Information() {
  const page_name='our_client';
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
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={10}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3" style={{ textOverflow: "ellipsis", overflow: "hidden" }} >{serviceheading.page_heading}</MKTypography>
          <MKTypography variant="h5"  style={{ textOverflow: "ellipsis", overflow: "hidden" }} color="info"  textGradient mb={3}>
          {serviceheading.page_paragraph}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;