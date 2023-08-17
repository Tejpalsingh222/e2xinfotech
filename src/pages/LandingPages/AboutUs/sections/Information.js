/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import office1 from "assets/images/officeimg/Office (6).jpg";
import office2 from "assets/images/officeimg/Office (8).jpg";
import office3 from "assets/images/ABC2.jpg";

function Information () {
  return (
    <MKBox component='section' py={12}>
      <Container>
        <MKTypography variant='h3'>WHY HIRE US</MKTypography>
        <MKTypography variant='h6'>
          let us take a look at some of the most important benefits of hiring the offshore software
          development company. Here we go…
        </MKTypography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={15} lg={6}>
            <Grid container justifyContent='flex-start'>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon='public'
                    title='Cost effective'
                    description=' In some of the Western countries, Those who provide simple and looking good website development services, ask for a huge amount of fees; So, if you contact too offshore companies, you can get the services at the affordable rates.'
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon='payments'
                    title='Quality'
                    description='The offshore companies hire only the expert designers. So, the quality of the projects they work upon is always extraordinary and equivalent to the international standards. Also, they make the effective use of the latest tools and technologies'
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon='payments'
                    title='Communication'
                    description='You will never feel that you are not connected to the company. They will remain in constant communication either through phone or email and will let you know about the progress of the project.'
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon='payments'
                    title=' Timely delivery'
                    description=' They always plan their project before they start The most important benefits of hiring the offshore software development company to get a website developed for your business'
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon='apps'
                    title='24×7 business operation'
                    description='As the business will remain operational round the clock,sales also increase to the great extent.Our support team delivers unlimited support for 24/7/365'
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon='3p'
                    title='Hi-tech security'
                    description='One of the main reasons behind people choosing the offshore companies is that, they provide complete security to the data and  making it highly safe and secured'
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 10, lg: 0 } }}>
            <CenteredBlogCard
              image={office1}
              title='Our Work-space'
              description=' Provides you with top class services and facilities required to help you achieve maximum productivity.'
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={5.5} sx={{ mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={office2}
              title='Meeting-Rooms'
              description=' Provides you with top class services and facilities required to help you achieve maximum productivity.'
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6.2} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={office3}
              title=' OUR Building '
              description='Plot No 22, Sector 135, Noida, Uttar Pradesh 201304'
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
