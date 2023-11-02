import React , { useState } from 'react';
import "./login.scss";
import axios from 'axios';
import { setUserSession } from '../../Utils/common';
import {useNavigate} from 'react-router-dom';

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import SimpleFooter from "examples/Footers/SimpleFooter";

import Swal from "sweetalert2";


import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// react-router-dom components
import { Link } from "react-router-dom";

// Authentication layout components

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
const Login = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
event.preventDefault();
   const form=new FormData(event.currentTarget);
   const email=form.get('email');
   const password=form.get('password');
    axios.post('http://localhost:5000/login',
     { email: email, password: password }).then(
      (data) => {
        console.log('data', data.data.data)
        console.log('jduej', data.data.message)
        if (data.data.message) {
          Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'Login Successfully.',
          });
          localStorage.setItem('dashboard-user', JSON.stringify(data.data));
          
          window.location.href="/dashboard";
        } else {
          Swal.fire({
            title: 'Failed',
            type: "error",
            text: data.data,
          });
        }
      }).catch(error => { console.log(error) })
    }
    const onSuccess =(res) =>{
      console.log("Login Successs! currunt user:",res.profileObj);
    }
    const onFailure =(res) =>{
      console.log("Login failed! res :", res);
    }
    return (
    <>
      <MKBox
        position='absolute'
        top={0}
        left={0}
        zIndex={1}
        width='100%'
        minHeight='100vh'
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width='100%' height='100vh' mx='auto' position='relative' zIndex={2}>
        <Grid container spacing={1} justifyContent='center' alignItems='center' height='100%'>
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant='gradient'
                bgColor='info'
                borderRadius='lg'
                coloredShadow='info'
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign='center'
              >
                <MKTypography
                  variant='h4'
                  sx={{ textDecoration: "underline" }}
                  fontWeight='medium'
                  color='black'
                  mg='1px'
                  mt={1}
                >
                  E2X INFOTECH PVT LTD
                </MKTypography>
                <MKTypography variant='h4' fontWeight='medium' color='white' mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent='center' sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href='#' variant='body1' color='white'>
                      <FacebookIcon color='inherit' />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href='#' variant='body1' color='white'>
                      <GitHubIcon color='inherit' />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href='#' variant='body1' color='white'>
                      <GoogleIcon color='inherit' />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox onSubmit={handleSubmit}  component='form' role='form'>
                  <MKBox mb={2}>
                    <MKInput name="email" type='email' label='Email' fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput name="password" type='password' label='Password' fullWidth />
                  </MKBox>
                 
                  <MKBox mt={4} mb={1}>
                    <MKButton type="submit" variant='gradient' color='info' fullWidth>
                      sign
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign='center'>
                    <MKTypography variant='button' color='text'>
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to='*'
                        variant='button'
                        color='info'
                        fontWeight='medium'
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width='100%' position='absolute' zIndex={2} bottom='1.625rem'>
        {/* <SimpleFooter light /> */}
      </MKBox>
    </>
  );
}

export default Login
