
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3">WHAT CLIENTS SAY ABOUT E2X INFOTECH</MKTypography>
          <MKTypography variant="h5" color="info" textGradient mb={2}>
          E2X Infotech , regarded as one of the best IT Services Provider in India and we believe in the development and growth of our client’s organization and business.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

















































































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

// // @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// // import MKButton from "components/MKButton";

// // Material Kit 2 React examples
// import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// // Images
// import team1 from "assets/images/Ronald.jpg";
// import team2 from "assets/images/Mourad.jpg";
// import team3 from "assets/images/Torre.jpg";
// import team4 from "assets/images/Hayden.jpg";
// import team5 from "assets/images/kylie.jpg";
// import team6 from "assets/images/json.jpg";

// function Client() {
//   return (
//     <MKBox
//       component="section"
//       variant="gradient"
//       bgColor="light"
//       position="relative"
//       mt={10}
//       py={6}
//       px={{ xs: 2, lg: 0 }}
//       mx={3}
    
//     >
//       <Container>
//         <Grid container>
//           <Grid item xs={12} md={8} sx={{ mb: 6 }}>
//             <MKTypography variant="h3" color="Black">
//             WHAT CLIENTS SAY ABOUT E2X INFOTECH
//             </MKTypography>
//             <MKTypography variant="body3" color="Black" opacity={0.8}>
//             E2X Infotech , regarded as one of the best IT Services Provider in India and we believe in the development and growth of our client’s organization and business.
//             </MKTypography>
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={6}>
//             <MKBox mb={1}>
//               {/* <HorizontalTeamCard
//                 image={team1}
//                 name="Ronald"
//                 position={{ color: "info", label: "Client-1" }}
//                 description="Had a great experience working with E2X Infotech. He got the code done and even went the extra mile to work to work through some."
//               /> */}
//             </MKBox>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <MKBox mb={1}>
//               {/* <HorizontalTeamCard
//                 image={team2}
//                 name="Mourad"
//                 position={{ color: "info", label: "Client-2" }}
//                 description="Best freelancer ever Fast responses and I guarantee you will be very satisfied Is not the person who say yes I can do this job 100"
//               /> */}
//             </MKBox>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <MKBox mb={{ xs: 1, lg: 0 }}>
//               {/* <HorizontalTeamCard
//                 image={team3}
//                 name="Dan dela torre"
//                 position={{ color: "info", label: "Client-3" }}
//                 description="Best freelancer ever! Fast responses and very good and well done job. Trust this person and I guarantee you will be very satisfied!"
//               /> */}
//             </MKBox>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <MKBox mb={{ xs: 1, lg: 0 }}>
//               {/* <HorizontalTeamCard
//                 image={team4}
//                 name="Heyden D'arcy"
//                 position={{ color: "info", label: "Client-4" }}
//                 description="Highly recommended We have several active projects and focusing a lot of attention on any one of them can be difficult."
//               /> */}
//             </MKBox>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <MKBox mb={{ xs: 1, lg: 0 }}>
//               {/* <HorizontalTeamCard
//                 image={team5}
//                 name="kylie Barrow"
//                 position={{ color: "info", label: "Client-5" }}
//                 description="A pleasure to work with - and the work was brilliant.. and Strongly recommend... with E2X "
//               /> */}
//             </MKBox>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <MKBox mb={{ xs: 1, lg: 0 }}>
//               {/* <HorizontalTeamCard
//                 image={team6}
//                 name="Jason Halberstadt"
//                 position={{ color: "info", label: "Client-6" }}
//                 description="E2X Infotech are wonderfull nice ton work.Very committed to performing to meet our exact requirements"
//             /> */}
//             {/* <MKButton variant="text" color="white">
//              Many other clients
//               </MKButton> */}
//             </MKBox>
//           </Grid>
//         </Grid>
//       </Container>
//     </MKBox>
//   );
// }

// export default Client;

