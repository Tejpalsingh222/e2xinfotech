
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import textField from "assets/theme/components/form/textField";

import "./jobprofile.css"

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react'


const img = 'http://localhost:5000/uploads/'

function Profile() {
  const [getdata, setData] = useState('')
  const [date, setDat] = useState('')
  const [days,setDays] = useState('')
  
  const page_id = window.location.href.split('/')[7]
  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/getJobsWithSpecificId/${page_id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDat(data.data[0].date);
        setData(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi()
  }, [])
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate =date;
  console.log('firstDate days',firstDate);
  const secondDate =new Date().toISOString().slice(0, 10)
  const date1 = firstDate.split('-');
  const date2 = secondDate.split('-');
  const dat1 = new Date(date1[0], date1[1], date1[2]);
  const dat2 = new Date(date2[0], date2[1], date2[2]); 
  const diffDays = Math.round(Math.abs((dat1 - dat2) / oneDay));
  var months = Math.floor(diffDays/30);
  function daysInThisMonth() {
    var now = new Date();
    var cuurentDays=new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    return cuurentDays;
  }
    
  var newmonth=''
  if(diffDays >= daysInThisMonth())
  {
      newmonth=months + ' Months ago';
  }else{
      newmonth=diffDays+ ' Days ago';
  }

console.log('check month and days',newmonth);
   
  return (
    <MKBox  component="section" py={{ xs: 6, sm: 12 }}>
       {getdata && getdata.map(user => (
      <Container>
            <MKTypography sx={{textDecoration: 'underline'}} variant='h2' color='Blue' mb={5} >
           {user.jobtitle}
          </MKTypography>
   <h2 className="theme-posted defThmSubHeading ng-binding" ng-show="companyCommonConfiguration.enableJobPostedDate==true"> Job Posted <strong>{diffDays == 0 ? 'Today.': newmonth}</strong> </h2>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container mt={-10}  py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" mb={1}>
                <MKTypography  sx={{textDecoration: 'underline'}} variant="h5" >{user.title}</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.about_company}
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Job Description</MKTypography>
               </MKBox>

              <MKTypography variant="body1">
              {user.job_description}
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Open Positions</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.open_positions}
              </MKTypography>

              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Skills Required</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.skills_required}
              </MKTypography>

              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Location</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.joblocation}
              </MKTypography>

              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Education/Qualification</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.education}
              </MKTypography>

              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Desirable Skills</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.desirable_skills}
              </MKTypography>

              <MKBox display="flex" justifyContent="space-between" mt={5}>
                <MKTypography sx={{textDecoration: 'underline'}} variant="h5" >Years Of Exp.</MKTypography>
               </MKBox>
              <MKTypography variant="body1">
              {user.experience}
              </MKTypography>
            </Grid>
          </Grid>
          <h2><Link to="/pages/landing-pages/Career/Jobform">Apply for the Jobs 📮</Link></h2>
        </Grid>
       
      </Container>
         ))}
    </MKBox>
  );
}

export default Profile;