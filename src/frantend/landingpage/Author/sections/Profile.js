
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { useState, useEffect } from 'react'


const img = 'http://localhost:5000/uploads/'

function Profile() {
  const [getdata, setData] = useState('')

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/get_blog`)
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

            <MKAvatar src={img + user.image} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
  
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">{user.title}</MKTypography>
                <MKButton  variant="outlined" color="info" size="small">
                  Follow
                </MKButton>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
              {user.description}
              </MKTypography>
            </Grid>
          </Grid>
         
        </Grid>
       
      </Container>
         ))}
    </MKBox>
  );
}

export default Profile;
