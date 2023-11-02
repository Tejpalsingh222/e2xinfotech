import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

import axios from "axios";
import Swal from "sweetalert2";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import "./jobForm.css"

// import "./mkmsg.css"
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'

// Routes
import routes from "routes";

import { useState } from "react";
import validator from 'validator'
const BASE_URL = 'http://localhost:5000/message_us';


function MKmsg() {
  
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('')

  const [selectedFile, setFile] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  function handleChange(event) {
     console.log('ha check rha hu abhi',event.target.files[0]);
    setFile(event.target.files[0])
  }
  function yourEmailinput(event) {
    console.log('ha check rha hu tera email',event.target.value);
    setEmail(event.target.value)
 }
 function yourNameinput(event) {
  console.log('ha check rha tera name',event.target.value);
 setName(event.target.value)
}
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('selectedFile.name',selectedFile.name)
      const formData = new FormData();
  
         formData.append("myFile",selectedFile,selectedFile.name);
         formData.append("Full_Name",name);
         formData.append("Your_Email",email);


        
         if (validator.isEmail(email)) {
          setLoading(true)
          axios({
            method: "post",
            url: 'http://localhost:5000/send-resume',
            data: formData,
          
          }).then(
            (data) => {
              console.log('ljljoojoojojojooj', data.statusText)
              console.log('jduej', data.data.message)
              setLoading(false)
              if (data.statusText) {
                Swal.fire({
                  title: 'Message sent successfully',
                  type:'success',
                  text: data.data.message,
                });
              } else {
                Swal.fire({
                  title: 'Failed',
                  type: "error",
                  text: 'not send your massage',
                });
              }
            }).catch(error => { console.log(error) })
          // const onSuccess =(res) =>{
          //   console.log("Massage send Successsfully! currunt user:",res.profileObj);
          // }
          // const onFailure =(res) =>{
          //   console.log("Massage failed! res :", res);
          // }
        } else {
          setEmailError({Email:'Enter valid Email!'})
        }
      } 

  return (
    <>
     <DefaultNavbar
        routes={routes}
        sticky
      />
         <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} lg={3.5}></Grid>
      <Grid 
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4.9}
          // ml={-9}
          ml={ -9 }
          mr={5}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 35 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
            mr={-9}
            ml={10}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
              
            >
              <MKTypography variant="h3" color="white">
              E2X APPLICATION FORM
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant='body2' color='text' mb={3}>
                Upload Your Resume here with Details:
              </MKTypography>
               <MKBox onSubmit={handleSubmit}  width="100%"  component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name="Full_Name"
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      onChange={yourNameinput}
                    />
                     <span style={{
          fontWeight: '2px',
          color: 'red',
        }}>{emailError.Full_Name}</span>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name="Your_Email"
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      onChange={yourEmailinput}
                    />
                      <span style={{
          fontWeight: '2px',
          color: 'red',
        }}>{emailError.Email}</span>
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                </Grid>
                <div className="formInput">
                    <label htmlFor="file">
                     Upload Resume : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input name="Your_Resume" type="file" onChange={handleChange}/>
                    <span style={{
          fontWeight: '2px',
          color: 'red',
        }}>{emailError.Your_Resume}</span>
                  </div>
                 <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                  {loading ? <> <CircularProgress color="inherit" /></> : <>Submit Form</>}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
         </MKBox>
        </Grid>
        </Grid>
     
    </>
  );
}
export default MKmsg;