import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import "./mkmsg.css"

// Routes
import routes from "routes";
import bgImage from "assets/images/IMG_4.jpg";
import { useState } from "react";
import validator from 'validator'
const BASE_URL = 'http://localhost:5000/message_us';



function MKmsg() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('')
    const handleSubmit = (event) => {
      event.preventDefault();
         const form=new FormData(event.currentTarget);
         const Full_Name=form.get('Full_Name');
         const Your_Email =form.get('Your_Email');
         const Subject =form.get('Subject');
         const send_Message =form.get('send_Message');

         if (Full_Name.length == 0) {
          setEmailError({Full_Name:"Name Can't Empty"})
          return
        }
        if (Subject.length == 0) {
          setEmailError({Subject:"Fill Subject"})
          return
        }
        if (send_Message.length == 0) {
          setEmailError({send_Message:"Enter Your Message"})
          return
        }
      
         if (validator.isEmail(Your_Email)) {
          setLoading(true)
          axios.post('http://localhost:5000/send-email',
          // response => {
           { Full_Name: Full_Name, Your_Email : Your_Email,Subject:Subject,send_Message : send_Message}).then(
            (data) => {
              console.log('ljljoojoojojojooj', data.statusText)
              console.log('jduej', data.data.message)
              setLoading(false)
              if (data.statusText) {
                Swal.fire({
                  title: 'Message sent successfully',
                  type:'success',
                  text: data.data.message,
                });;
              } else {
                Swal.fire({
                  title: 'Failed',
                  type: "error",
                  text: 'not send your massage',
                });
              }
            }).catch(error => { console.log(error) })
          const onSuccess =(res) =>{
            console.log("Massage send Successsfully! currunt user:",res.profileObj);
          }
          const onFailure =(res) =>{
            console.log("Massage failed! res :", res);
          }
        } else {
          setEmailError({Email:'Enter valid Email!'})
        }
      } 
  return (
    <>
      <Grid container spacing={6} sx={{ mt: -20}}alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(90% - .2rem)"
            height="calc(85vh - 2.5rem)"
            borderRadius="lg"
            ml={11}
          
            sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", }}
          />
        </Grid>
        <Grid
          item
          mt={2.5}
          xs={10}
          sm={10}
          md={8}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={-3}
            mr={-9}
            ml={-8}
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
              TYPE YOUR MESSAGE HERE...
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For  any type of further questions, including partnership opportunities.
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
                    />
                      <span style={{
          fontWeight: '2px',
          color: 'red',
        }}>{emailError.Email}</span>
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      name="Subject"
                      variant="standard"
                      label="subject"
                      placeholder="Type Subject"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={4}
                        />
                      <span style={{
          fontWeight: '2px',
          color: 'red',
        }}>{emailError.Subject}</span>
                    </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      name="send_Message"
                      variant="standard"
                      label=" send Message to us."
                      placeholder="Type message"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={4}
                    />
                     <span style={{
          fontWeight: '2px',
          color: 'red',
        }}>{emailError.send_Message}</span>
                  </Grid>
                </Grid>
                 <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                  {loading ? <> <CircularProgress color="inherit" /></> : <>Send Message</>}
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