import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { useState,useEffect } from "react";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/mak.jpg";
import bgBack from "assets/images/hoto.jpg";

function Information() {
  const [GetcompInfo,setCompInfo]=useState('');
  const [cardinfo,setInfo]=useState('');
  const [cardinfo1,setInfo1]=useState('');
  const fetchCompanyHisotry=()=>{
    fetch('http://localhost:5000/get_home_comapny_info').then(response => {
        return response.json()
      })
      .then(data => {
        console.log('tejplalbnbnbnn',data.data);
        
        setInfo(data.data[0]);
        setInfo1(data.data[1])
      })
}
useEffect(()=>{
  fetchCompanyHisotry();
},[]);
const fetchCompanyHisotry1=()=>{
  fetch('http://localhost:5000/get_home_comapny_info_o').then(response => {
      return response.json()
    })
    .then(data => {
      console.log('tejplalkdineondie',data.data);
      setCompInfo(data.data)
    })
}
useEffect(()=>{
fetchCompanyHisotry1();
},[]);
console.log('checktejpal',cardinfo);
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center"  sx={{ mx: "auto" ,ml:"-12"}}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                 image={bgFront}
                 icon={cardinfo.icons}
                title={
                  <>
                   {cardinfo.title}
                  </>
                }
                description={cardinfo.description}
              />
              <RotatingCardBack
                 image={bgBack}
                 title={cardinfo1.title}
                 description={cardinfo.description} 
              />
            </RotatingCard>
          </Grid>
        
          <Grid item xs={12} lg={8} sx={{ ml:-1 }} >
         <Grid container spacing={3} >
            {GetcompInfo && GetcompInfo.map(user => (
              <Grid item xs={12} md={6} >
                <DefaultInfoCard
                  icon={user.icons}
                  title= {user.title}
                  description= {user.description}
                />
              </Grid>
                ))}
              </Grid>
              </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;


