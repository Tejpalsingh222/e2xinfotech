import Card from "@mui/material/Card";


// Material Kit 2 React components
import MKBox from "components/MKBox";
 

// import Carousel from 'react-multi-carousel';

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "frantend/landingpage/Author/sections/Profile";
import Posts from "frantend/landingpage/Author/sections/Posts";

// import Trip from "frantend/landingpage/Author/sections/Feedsection"
// import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "frantend/landingpage/Author/sections/Footer";

// Routes
import routes from "routes";

import "./indexx.css"

// Images
import bgImage from "assets/images/banner2.jpg";

import img1 from "assets/images/1.jpg";
import img2 from "assets/images/2.jpg";
import img3 from "assets/images/3.jpg";
import img4 from "assets/images/4.jpg";

function Author() {
  document.title ="E2X INFOTECH || BLOG PAGE"
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
          />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
          {/* <!-- start clients section--> */}
 {/* <section id="clients">
    <div className="container1">
        <div className="row">
            <div className="col-lg-12">
                <div className="owl-carousel ">
                     <div className="item">
                        <div className="client-img-holder">
                            <img src={img2} alt="client"/>
                        </div>
                    </div>

                    <div className="item"> 
                        <div className="client-img-holder">
                            <img src={img3} alt="client"/>
                        </div>
                    </div>

                    <div className="item">
                        <div className="client-img-holder">
                            <img src={img4} alt="client"/>
                        </div>
                    </div>

                    <div className="item">
                        <div className="client-img-holder">
                            <img src={img1} alt="client"/>
                        </div>
                    </div>
                      
                    <div className="item">
                        <div className="client-img-holder">
                            <img src={img3} alt="client"/>
                        </div>
                    </div>

                    <div className="item">
                        <div className="client-img-holder">
                            <img src={img1} alt="client"/> 
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>
<!-- End clients section--> */}
        </Card>
        {/* <Trip/> */}
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}
export default Author;
