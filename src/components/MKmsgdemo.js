// import Grid from "@mui/material/Grid";
// import axios from "axios";
// import Swal from "sweetalert2";
// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
// import MKTypography from "components/MKTypography";
// // Routes
// import routes from "routes";
// import bgImage from "assets/images/IMG_4.jpg";
// import { useState } from "react";
// const BASE_URL = 'http://localhost:5000/message_us';

// function MKmsg() {
//   // const[Full_Name,setName]=useState('');
//   // const [Your_Email,setEmail]=useState('');
//   // const [ send_Message,setMessage]=useState('');

//     const handleSubmit = (event) => {
//       event.preventDefault();
//          const form=new FormData(event.currentTarget);
//          const Full_Name=form.get('Full_Name');
//          const Your_Email =form.get('Your_Email');
//          const send_Message =form.get('send_Message');
//           axios.post('http://localhost:5000/message_us',
//           // response => {
//            { Full_Name: Full_Name, Your_Email : Your_Email,send_Message : send_Message}).then(
//             (data) => {
//               console.log('data', data.data.data)
//               console.log('jduej', data.data.message)
//               if (data.data.message) {
//                 Swal.fire({
//                   title: 'Your massage send',
//                   type: 'success',
//                   text: data.data.message,
//                 });
                
//               } else {
//                 Swal.fire({
//                   title: 'Failed',
//                   type: "error",
//                   text: 'not send your massage',
//                 });
        
//               }
        
//             }).catch(error => { console.log(error) })
//           }
//           // const handleFailure = (result)=> {
//           //    alert(result);
//           // }
        
//           // const handleLogin = (googleData) =>{
//           //   console.log(googleData);
//           // }
//           const onSuccess =(res) =>{
//             console.log("Massage send Successsfully! currunt user:",res.profileObj);
//           }
//           const onFailure =(res) =>{
//             console.log("Massage failed! res :", res);
//           }
        
//   return (
    
//     <>
//       <Grid container spacing={6} sx={{ mt: -20}}alignItems="center">
//         <Grid item xs={20} lg={6}>
//           <MKBox
//             display={{ xs: "none", lg: "flex" }}
//             width="calc(90% - .2rem)"
//             height="calc(85vh - 2.5rem)"
//             borderRadius="lg"
//             ml={11}
          
//             sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", }}
//           />
//         </Grid>
//         <Grid
//           item
//           mt={2.5}
//           xs={10}
//           sm={10}
//           md={8}
//           lg={6}
//           xl={4}
//           ml={{ xs: "auto", lg: 6 }}
//           mr={{ xs: "auto", lg: 6 }}
//         >
//           <MKBox
//             bgColor="white"
//             borderRadius="xl"
//             shadow="lg"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             mt={{ xs: 20, sm: 18, md: 20 }}
//             mb={{ xs: 20, sm: 18, md: 20 }}
//             mx={-3}
//             mr={-9}
//             ml={-8}
//           >
//             <MKBox
//               variant="gradient"
//               bgColor="info"
//               coloredShadow="info"
//               borderRadius="lg"
//               p={2}
//               mx={2}
//               mt={-3}
//             >
//               <MKTypography variant="h3" color="white">
//               TYPE YOUR MESSAGE HERE...
//               </MKTypography>
//             </MKBox>
//             <MKBox p={3}>
//               <MKTypography variant="body2" color="text" mb={3}>
//                 For  any type of further questions, including partnership opportunities.
//               </MKTypography>
//               <MKBox onSubmit={handleSubmit}  width="100%"  component="form" method="post" autoComplete="off">
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} md={6}>
//                     <MKInput
//                       name="Full_Name"
//                       variant="standard"
//                       label="Full Name"
//                       InputLabelProps={{ shrink: true }}
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <MKInput
//                       name="Your_Email"
//                       type="email"
//                       variant="standard"
//                       label="Email"
//                       InputLabelProps={{ shrink: true }}
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <MKInput
//                       name="send_Message"
//                       variant="standard"
//                       label=" send Message to us."
//                       placeholder="Type message"
//                       InputLabelProps={{ shrink: true }}
//                       multiline
//                       fullWidth
//                       rows={4}
//                     />
//                   </Grid>
//                 </Grid>
//                 <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
//                   <MKButton type="submit" variant="gradient" color="info">
//                     Send Message
//                   </MKButton>
//                 </Grid>
//               </MKBox>
//             </MKBox>
//           </MKBox>
//         </Grid>
//       </Grid>
//     </>
//   );
// }
// export default MKmsg;