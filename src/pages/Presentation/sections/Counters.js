import { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  const [GetcompHistory,setCompHistory]=useState('');
  const fetchCompanyHisotry=()=>{
    fetch('http://localhost:5000/get_home_company_history').then(response => {
        return response.json()
      })
      .then(data => {
        setCompHistory(data.data)
      })
}
useEffect(()=>{
  fetchCompanyHisotry();
},[]);
console.log('checktejpal',GetcompHistory);

  return (
   
    <MKBox component="section" py={2}>
    
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
        { GetcompHistory && GetcompHistory.map((user)=>(
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={user.home_couter}
              suffix="+"
              title={user.title}
              description={user.description}
              />
          </Grid>
          ))}
        </Grid>
        
      </Container>
       
    </MKBox>
  );
}

export default Counters;
