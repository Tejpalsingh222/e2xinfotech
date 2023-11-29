import Grid from '@mui/material/Grid'
// Material Kit 2 React components
import { CircularProgress } from '@mui/material'
import MKBox from 'components/MKBox'
import MKInput from 'components/MKInput'
import Container from "@mui/material/Container";
import MKButton from 'components/MKButton'
import MKTypography from 'components/MKTypography'
import validator from 'validator'
import './contact.css'

// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'

import GoMap from '../AboutUs/sections/GoMap'

import { useState, useEffect } from 'react'

import axios from 'axios'
import Swal from 'sweetalert2'

// Routes
import routes from 'routes'

import Footer from '../Author/sections/Footer'

// Image
import bgImage from 'assets/images/pl.webp'

function ContactUs () {
  const [getdata, setData] = useState('')
  const CHARACTER_LIMIT = 20;
  const fetchUserData = () => {
    fetch('http://localhost:5000/get_social_media/')
      .then(response => response.json())
      .then(json => json.data)
      .then(data => {
        setData(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  document.title = 'E2X INFOTECH || CONTACT PAGE'
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const Full_Name = form.get('Full_Name')
    const Your_Email = form.get('Your_Email')
    const Subject = form.get('Subject')
    const send_Message = form.get('send_Message')

    if (Full_Name.length == 0) {
      setEmailError({ Full_Name: "Name Can't Empty" })
      return
    }

    if (Subject.length == 0) {
      setEmailError({ Subject: 'Fill Subject' })
      return
    }
    if (send_Message.length == 0) {
      setEmailError({ send_Message: 'Enter Your Message' })
      return
    }

    if (validator.isEmail(Your_Email)) {
      setLoading(true)
      axios
        .post(
          'http://localhost:5000/send-email',
          // response => {
          {
            Full_Name: Full_Name,
            Your_Email: Your_Email,
            Subject: Subject,
            send_Message: send_Message
          }
        )
        .then(data => {
          console.log('ljljoojoojojojooj', data.statusText)
          console.log('jduej', data.data.message)
          setLoading(false)
          if (data.statusText) {
            Swal.fire({
              title: 'Message sent successfully',
              type: 'success',
              text: data.data.message
            })
          } else {
            Swal.fire({
              title: 'Failed', 
              type: 'error',
              text: 'not send your massage'
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
      const onSuccess = res => {
        console.log('Massage send Successsfully! currunt user:', res.profileObj)
      }
      const onFailure = res => {
        console.log('Massage failed! res :', res)
      }
    } else {
      setEmailError({ Email: 'Enter valid Email!' })
    }
  }
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: 'none', lg: 'flex' }}
            width='calc(90% - 2rem)'
            height='calc(100vh - 2rem)'
            borderRadius='lg'
            ml={16.2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: 'no-repeat'
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4.9}
          // mt={2}
          ml={{ xs: 'auto', lg: -1.5 }}
          mr={{ xs: 'auto', lg: 10 }}
        >
          <MKBox
            bgColor='white'
            borderRadius='xl'
            shadow='lg'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
            // mr={3}
          >
            <MKBox
              variant='gradient'
              bgColor='info'
              coloredShadow='info'
              borderRadius='lg'
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant='h3' color='white'>
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant='body2' color='text' mb={3}>
                For further questions, Including partnership opportunities,
                Please email e2xinfotech@gmail.com or contact using our contact
                form.
              </MKTypography>
              <MKBox
                onSubmit={handleSubmit}
                width='100%'
                component='form'
                method='post'
                autoComplete='off'
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                     inputProps={{
                      maxlength: 20
                       }}
                      name='Full_Name'
                      variant='standard'
                      label='Full Name'
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                    <span
                      style={{
                        fontWeight: '2px',
                        color: 'red'
                      }}
                    >
                      {emailError.Full_Name}
                    </span>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      name='Your_Email'
                      type='email'
                      inputProps={{
                        maxlength: 50
                         }}
                      variant='standard'
                      label='Email'
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                    <span
                      style={{
                        fontWeight: '2px',
                        color: 'red'
                      }}
                    >
                      {emailError.Email}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      name='Subject'
                      variant='standard'
                      label='Subject'
                      inputProps={{
                      maxlength: 30
                       }}
                      placeholder='Your Subject'
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                    />
                    <span
                      style={{
                        fontWeight: '2px',
                        color: 'red'
                      }}
                    >
                      {emailError.Subject}
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      name='send_Message'
                      variant='standard'
                      label='What can we help you?'
                      placeholder='Describe your problem in at least 250 characters'
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={4}
                    />
                    <span
                      style={{
                        fontWeight: '2px',
                        color: 'red'
                      }}
                    >
                      {emailError.send_Message}
                    </span>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent='center'
                  xs={12}
                  mt={5}
                  mb={2}
                >
                  <MKButton type='submit' variant='gradient' color='info'>
                    {loading ? (
                      <>
                        {' '}
                        <CircularProgress color='inherit' />
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
        <Container>
        <Grid container item xs={12}  lg={6}>
      <MKTypography variant="h3" mb={6} ml={5} sx={{textDecoration: 'underline'}}>
        Also Contact With Us On These Platforms:
      </MKTypography>
      </Grid>
      <MKBox display='flex'>
        {getdata &&
          getdata.map(service => (
            <MKTypography
              component='a'
              variant='h2'
              color='blue'
              href={service.link}
              mr={3}
              ml={5}
            >
              <i className={service.icon} />
            </MKTypography>
          ))}
        
      </MKBox>
      {/* <Grid container spacing={3}> */}
           <Grid item xs={12}  ml={-10}  >
       <GoMap/>
       </Grid>
       {/* </Grid> */}
       </Container>
      </Grid>
      <MKBox pt={6} px={1} mt={-7}>
        <Footer />
      </MKBox>
      
    </>
  )
}
export default ContactUs
