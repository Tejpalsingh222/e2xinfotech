
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./jobs.css";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// const img = 'http://localhost:5000/uploads/'
const routeurl='/frantend/landingpage/career/Jobview/';


const ReadMore = ({ children }) => { 
  const text = children; 
  const [isReadMore, setIsReadMore] = useState(true); 
  const toggleReadMore = () => { 
    setIsReadMore(!isReadMore); 
  }; 
  
  return ( 
    <p className="readmore"> 
    {isReadMore ? text.slice(0, 150) : text} 
    <span onClick={toggleReadMore} className="check"> 
      {isReadMore ? "...read more" : " show less"} 
    </span> 
    </p> 
  ); 
  }; 
  
function Jobs() {
  const [getdata, setData] = useState('')

 

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/get_jobs_upload_info/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('Jobs page ka data sahi hai',data.data);
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
      <Carousel   responsive={responsive} itemAriaLabel='dineideindie'>
        {getdata && getdata.reverse().map(user => (
           <Grid className="multi-coloum" container item xs={12}  lg={9}>
                <MKBox px={1} ml={-1}>
                  <b>
      {user.jobtitle}</b>
      </MKBox>
      <h5 _ngcontent-fpo-c14 className="ng-star-inserted">
              {/* <h5 className='fa fa-map-marker' aria-hidden='true'></h5>  */}
        <span _ngcontent-fpo-c14 className="ng-star-inserted">Location: </span>
        <b _ngcontent-fpo-c14 className="wrap-long-text" title="noida">{user.joblocation}</b>
        <h5>Posted Date:{user.date}</h5>
      </h5>        
 <h4><Link to={routeurl+user.id}>Read More...</Link></h4>
               </Grid>
               ))}         
</Carousel>
</Container>
 </MKBox>  
   </div>
  );
}
export default Jobs;
