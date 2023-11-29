// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import MKSocialButton from 'components/MKSocialButton'
// import QuiltedImageList from 'frantend/components/QuiltedImageList'

// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'
import DefaultFooter from 'examples/Footers/DefaultFooter'
import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Presentation page sections
import Counters from 'frantend/sections/Counters'
import Information from 'pages/Presentation/sections/Information'
import MKmsg from 'components/MKmsg'
import OurServices from 'components/OurServices'
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from 'pages/Presentation/sections/Testimonials'
// import Download from "pages/Presentation/sections/Download";
import Client from 'components/Client'
import Carouselss from 'frantend/components/Carouselss'
// import Fade from '@mui/material/Fade'

// Presentation page components
import BuiltByDevelopers from 'pages/Presentation/components/BuiltByDevelopers'

// Routes
import routes from 'routes'
import Footer from "../landingpage/Author/sections/Footer";
// import footerRoutes from 'footer.routes'

// Images
// import bgImage from 'assets/images/banner2.jpg'

import { useState, useEffect } from 'react'
const img = 'http://localhost:5000/uploads/'
function Home (props) {
  
  const [getdata, setData] = useState('')

    document.title ="E2X INFOTECH || HOME PAGE"
 
  const fetchdatawithapi = () => {
    fetch(`http://localhost/octo_web_api/e2xweb/carouselDetails.php?route=home_page_config&page_id=${props.title}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('url',`http://localhost/octo_web_api/e2xweb/carouselDetails.php?route=home_page_config&page_id=${props.title}`)
        // console.log('ha de de bhai ',data)
        setData(data)
      })
  }
  useEffect(() => {
    fetchdatawithapi()
  }, [])

  const [getdata1, setData1] = useState([])
  const fetchUserData = () => {
    fetch('http://localhost:5000/getpdd')
      .then(response => response.json())
      .then(json => json.data)
      .then(data => {
        console.log('jjjjjjj', data)
        setData1(data)
      })
  }

  useEffect(() => {
    fetchUserData()
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
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      {getdata &&
        getdata.map(user => (
          <MKBox
            minHeight='75vh'
            width='100%'
            sx={{
              backgroundImage: `url(${img + user.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            <Container>
              <Grid
                container
                item
                xs={12}
                lg={7}
                justifyContent='center'
                mx='auto'
              >
                <MKTypography
                  overflowWrap= "break-word"
                  variant='h2'
                  color='white'
                  backgroundColor='text.disabled'
                  mt={-6}
                  // mb={1}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down('md')]: {
                      fontSize: size['3xl']
                    }
                  })}
                >
                  {user.title}
                </MKTypography>
                <MKTypography
                 overflowWrap= "break-word"
                  variant='h4'
                  color='white'
                  backgroundColor='text.disabled'
                  textAlign='center'
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                >
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
    
      >
        <Counters />
        <Information />
        <MKmsg />
        <OurServices />
        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        <Client />
        <Carouselss/>
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Testimonials />
        <Container>
        <Carousel responsive={responsive} itemAriaLabel='dineideindie'>
            {getdata1 && getdata1.map(user => (
                <Grid container spacing={1}  >
                <Grid item xs={12} lg={11.5}>
                  <FilledInfoCard
                    variant='gradient'
                    color='info'
                    icon={user.pdd_image}
                    title={user.pdd_heading}
                    description={user.pdd_paragraph}
                  />
                </Grid>
                </Grid>
              ))}
          </Carousel>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={-10}>
        <Footer />
      </MKBox>
      
    </>
  )
}
export default Home
