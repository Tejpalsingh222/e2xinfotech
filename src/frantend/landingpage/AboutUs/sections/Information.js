import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import { useState, useEffect } from 'react'
const img = 'http://localhost:5000/uploads/'

function Information () {
  const [getdata, setData] = useState('')

  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/get_about_company_info`)
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
  const [getdata1, setData1] = useState('')
  const fetchdatawithapi1 = () => {
    fetch(`http://localhost:5000/get_about_company_info_o`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('ch',data.data);
        setData1(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi1()
  }, [])


  const [getdata2, setData2] = useState('')
  const fetchdatawithapi2 = () => {
    fetch(`http://localhost:5000/get_about_company_info_2`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('ch',data.data);
        setData2(data.data)
      })
  }
  useEffect(() => {
    fetchdatawithapi2()
  }, [])

  const page_name='About-us';
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
    <>
    <MKBox component='section' py={12}>
      <Container>
        <MKTypography style={{ textOverflow: "ellipsis", overflow: "hidden" }} variant='h3'>{serviceheading.page_heading}</MKTypography>
        <MKTypography style={{ textOverflow: "ellipsis", overflow: "hidden" }} variant='h6'>
        {serviceheading.page_paragraph}
        </MKTypography>
       <Grid container spacing={10} alignItems='center'>
          <Grid item xs={15} lg={15}>
            <Grid container justifyContent='flex-start'>
            {getdata && getdata.map(user => (
              <Grid item xs={12} md={6}>
                   <MKBox mb={5}>
                   <DefaultInfoCard
                    icon={user.icons}
                    title= {user.title}
                    description= {user.description}
                  />
                </MKBox>
              </Grid>
               ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml:"auto",mt: { xs:3}}}>
            {getdata1 && getdata1.map(user => (
            <CenteredBlogCard
              image={img + user.image}
              title={user.title}
              description= {user.description}
              action='false'
            />
            ))}
          </Grid>
         <Grid item xs={12} lg={6} sx={{ ml:"auto" ,mt: { xs: 5,}}}>
         {getdata2 && getdata2.map(user => (
            <CenteredBlogCard
              image={img + user.image}
              title={user.title}
              description={user.description}
              action='false'
            />
            ))}
          </Grid>
        </Grid>
      </Container>
      </MKBox>
    </>   
  );
}

export default Information;
