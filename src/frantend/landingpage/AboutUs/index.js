
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "./sections/Information";
import Team from "./sections/Team";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


import { useState, useEffect } from 'react'
import Footer from "../Author/sections/Footer";

const img = 'http://localhost:5000/uploads/'
function AboutUs(props) {
    //  alert(props.title)
  const [getdata, setData] = useState('')


  document.title ="E2X INFOTECH || ABOUT PAGE"
  const fetchdatawithapi = () => {
    fetch(`http://localhost:5000/get_home_page_config/${props.title}`)
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
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "/pages/authentication/sign-in",
        //   label: "Login ",
        //   color: "default",
        // }}
       sticky
      />
       {getdata &&
        getdata.map(user => (
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${img + user.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            style={{ textOverflow: "ellipsis", whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
            xs={12}
            lg={8}
            mt={5}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
            style={{ textOverflow: "ellipsis", whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
              variant="h2"
              color="white"
              backgroundColor='text.disabled'
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {user.title}
            </MKTypography>
            <MKTypography
              variant="h4"
              color="white"
             
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
            </MKTypography>
            <MKTypography variant="h5" color="white"  backgroundColor='text.disabled' opacity={0.8} mt={1} mb={3}>
            {user.description}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
       ))}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
      </Card>
      <MKBox pt={6} px={1} mt={-9}>
        <Footer/>
      </MKBox>
    </>
  );
}

export default AboutUs;
