
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";

import { useState, useEffect } from 'react'

const img = 'http://localhost:5000/uploads/'

function Company() {
  const [getdata, setData] = useState('')

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/get_career`)
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
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
       {getdata && getdata.map(user => (
      <Container>

        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">

            {/* <MKAvatar src={img + user.image} alt="Burce Mars" size="xxl" shadow="xl" /> */}
          </MKBox>
  
          <Grid container py={6}>
            <Grid item xs={12} md={7}  mt={-10} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">{user.title}</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
              {user.description}
              </MKTypography>
              <MKBox  justifyContent="space-between" alignItems="center" mt={10} mb={1}>
              {/* <MKTypography variant="h4" >Perks & benefits</MKTypography>
              <li><strong>Remote</strong>: Our entire company is distributed.</li>
<li><strong>Gatherings</strong>: We meet up once or twice a year for a short week of meetings, events, and fun!</li>
<li><strong>Equipment</strong>:E2X INFOTECH  will let you choose new hardware of your choice.</li>
<li><strong>Flexible hours</strong>: We work from different time zones. When the work is done doesn&#39;t really matter.</li> */}

<MKBox  justifyContent="space-between" alignItems="center"  mt={10} mb={1}>
                <MKTypography variant="h3">Open Roles In Company</MKTypography><br></br>
                <MKTypography variant="body1" color="blue">
                We're currently looking for help in the following areas:
              </MKTypography> 
</MKBox>
</MKBox>
</Grid>
</Grid>
         
        </Grid>
       
      </Container>
         ))}
    </MKBox>
  );
}
export default Company;
