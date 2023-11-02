import { useEffect,useState } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import routes from "./routes";
import Home from "frantend/landingpage/Home"
import Dashboard from "admin/pages/home/Dashboard";
//home page header setting and get all page related
import HOME_HEADER_LIST_PAGE from 'admin/pages/home_page_header_list/Home_page_header_list';
import HOME_HEADER_PAGE from './admin/pages/home_page_header/Home_page_header';
import HOME_HEADER_EDIT_PAGE from 'admin/pages/home_page_header_list/Home_page_header_edit';


//home page company details history and get al page realted that
import HOME_COMPANY_LIST from 'admin/pages/home_company_history/Home_company_history_list';
import HOME_COMPANY_DETAILS from './admin/pages/home_company_details/Home_company_history';
import HOME_COMPANY_EDIT from 'admin/pages/home_company_history/Home_company_history_edit';
//home page company information details and get all page realted that
import HOME_INFORMATION_LIST from 'admin/pages/home_company_information/Home_company__information_list';
import HOME_COMPANY_INFORMATION from 'admin/pages/home_company_info_details/Home_company_infomation';
import HOME_INFORMATION_EDIT from 'admin/pages/home_company_information/Home_company_information_edit';

//Job Upload details and get all page realted that
import Job_Upload_LIST from 'admin/pages/jobs_upload/Jobs_upload_list';
import JOB_UPLOAD_ADD from 'admin/pages/job_upload_details/Jobs_upload_info';
import JOB_UPLOAD_EDIT from  'admin/pages/jobs_upload/Jobs_upload_edit';

// Job Upload details and get all page realted that
import MAIN_EDITOR from 'admin/pages/Main_editor/Main_editor_list';

//home page company information222222 details and get all page realted that
import HOME_INFORMATION_LIST2 from 'admin/pages/home_company_information2/Home_company__information_list2';
import HOME_COMPANY_INFORMATION2 from 'admin/pages/home_company_info_details2/Home_company_infomation2';
import HOME_INFORMATION_EDIT2 from 'admin/pages/home_company_information2/Home_company_information_edit2';

//ABOUT page company information details and get all page realted that
import ABOUT_INFORMATION_LIST from 'admin/pages/about_company_information/About_company__information_list';
import ABOUT_COMPANY_INFORMATION from 'admin/pages/about_company_info_details/About_company_infomation';
import ABOUT_INFORMATION_EDIT from 'admin/pages/about_company_information/About_company_information_edit';

//service route //

import Service_list from "admin/pages/footer_list/Service_list";
import Service_edit from "admin/pages/footer_list/Service_edit";
import ServiceData from   "admin/pages/services/Service";

//aboutpage info 2222222 route //
import About_list from "admin/pages/about_list/About_list";
import About_edit from "admin/pages/about_list/About_edit";
import AboutData from   "admin/pages/aboutinfo/About_add";

//aboutpage info 333333333 route //
import About_list1 from "admin/pages/about_list1/About_list1";
import About_edit1 from "admin/pages/about_list1/About_edit1";
import AboutData1 from   "admin/pages/aboutinfo1/About_add1";


import CLIENT_CAROUSEL_LIST from "admin/pages/cardcarousel_list/Cardcarousel_list";
import CLIENT_CAROUSEL_EDIT from "admin/pages/cardcarousel_list/Cardcarousel_edit";
import CAROUSEL_CLIENT from "admin/pages/cardcarousel/Cardcarousel";


import EXPERTISE_LIST from "admin/pages/expert_list/Expertise_list";
import EXPERTISE_EDIT from "admin/pages/expert_list/Expertise_edit";
import HOME_EXPERTISE from "admin/pages/expert/Expertise";

import PDD_LIST from "admin/pages/pdd_list/Pdd_list";
import PDD_EDIT from "admin/pages/pdd_list/Pdd_edit";
import HOME_PDD from "admin/pages/pdd/Pdd";

import MEDIA_LIST from"admin/pages/media_list/Media_list";
import MEDIA_EDIT from"admin/pages/media_list/Media_edit";
import MEDIA_ADD from"admin/pages/media/Media";

import TEAM_LIST from"admin/pages/Team_list/team_list";
import TEAM_EDIT from"admin/pages/Team_list/team_edit";
import Team_Data from"admin/pages/TeamExcutive/team";

import CONTACT_LIST from "admin/pages/contact_list/contact_list";
import CONTACT_EDIT from "admin/pages/contact_list/contact_edit";
import CONTACT_US_ADD from "admin/pages/contact_us/Contact";

import BLOG_LIST from "admin/pages/blog_list/Blog_list";
import BLOG_EDIT from"admin/pages/blog_list/Blog_edit";
import BLOG_ADD from "admin/pages/blog/blog";


import OUR_BLOG_LIST from "admin/pages/ourblog_list/Ourblog_list";
import OUR_BLOG_EDIT from "admin/pages/ourblog_list/Ourblog_edit";
import OUR_BLOG_ADD from"admin/pages/ourblog/ourblog";

//heading of all pages and get al page realted that:
import Heading_LIST from 'admin/pages/super_heading_info/Super_heading_list';
import Heading_DETAILS from './admin/pages/super_heading_details/Super_heading_infoo';
import Heading_EDIT from 'admin/pages/super_heading_info/Super_heading_edit';

//heading of all pages and get al page realted that:
import Navbar_LIST from 'admin/pages/navbar_info/Navbar_list';
import Navbar_DETAILS from './admin/pages/navbar_details/Navbar_infoo';
import Navbar_EDIT from 'admin/pages/navbar_info/Navbar_edit';

// Material Kit 2 React routes
import AdminLogin from "admin/pages/login/Login";

import JobForm from "frantend/landingpage/Career/sections/JobForm"
import JobView from"frantend/landingpage/Career/sections/Jobdescription/Jobview"

import Feedsection from "frantend/landingpage/Author/sections/Feedsection"

import { Abc } from "@mui/icons-material";
import Pdd_list from "admin/pages/pdd_list/Pdd_list";

export default function App() {
  const { pathname } = useLocation();

  const [items]=useState(localStorage.getItem('dashboard-user'));

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/main-page" element={<Home title="home"/>} />
        {/* <Route path="/dashboard" element={<Navigate to="/dashboard/login"/>}/> */}
        {/* route for home page header design */}
        <Route path="/dashboard/home_header_page_list" element={<HOME_HEADER_LIST_PAGE title="home"/>}/>
        <Route path='/dashbaord/home_header_page_edit/:about_id' element={<HOME_HEADER_EDIT_PAGE/>}/>
        <Route path="/dashboard/home_header_page_add"element={<HOME_HEADER_PAGE title="Add New  "/>}/>

       {/* route for home page company history setting */}
        <Route path="/dashboard/home_company_list" element={<HOME_COMPANY_LIST/>}/>
        <Route path='/dashbaord/home_company_edit/:about_id' element={<HOME_COMPANY_EDIT/>}/>
        <Route path="/dashboard/home_company_add"element={<HOME_COMPANY_DETAILS title="Add New  "/>}/>

         {/* route for home page company information setting */}
         <Route path="/dashboard/home_information_list"element={<HOME_INFORMATION_LIST/>}/>  
         <Route path="/dashboard/home_information_edit/:about_id" element={<HOME_INFORMATION_EDIT/>}/>
         <Route path="/dashboard/home_information_add"element={<HOME_COMPANY_INFORMATION title="Add New"/>}/>

           {/* Home service route 2222222 */}
           <Route path="/dashboard/home_information_list2" element={<HOME_INFORMATION_LIST2/>}/>
           <Route path="/dashboard/home_information_edit2/:about_id" element={<HOME_INFORMATION_EDIT2/>}/>
         <Route path="/dashboard/home_information_add2"element={<HOME_COMPANY_INFORMATION2 title="Add New"/>}/>
        
            {/* About information route */}
            <Route path="/dashboard/about_information_list" element={<ABOUT_INFORMATION_LIST/>}/>
           <Route path="/dashboard/about_information_edit/:about_id" element={<ABOUT_INFORMATION_EDIT/>}/>
         <Route path="/dashboard/about_information_add"element={<ABOUT_COMPANY_INFORMATION title="Add New"/>}/>
      
         {/* Home service route  */}
         <Route path="/dashboard/home_service_data_list" element={<Service_list/>}/>  
         <Route path="/dashboard/home_service_data_edit/:about_id" element={<Service_edit/>}/>
         <Route path="/dashboard/home_sercice_data_add"element={<ServiceData title="Add New"/>}/>


          {/* About cdbkjdc inform 22222 route  */}
          <Route path="/dashboard/about_data_list" element={<About_list/>}/>  
         <Route path="/dashboard/about_data_edit/:about_id" element={<About_edit/>}/>
         <Route path="/dashboard/about_data_add"element={<AboutData title="Add New"/>}/>

          {/* About cdbkjdc inform 33333333 route  */}
          <Route path="/dashboard/about_data_list1" element={<About_list1/>}/>  
         <Route path="/dashboard/about_data_edit1/:about_id" element={<About_edit1/>}/>
         <Route path="/dashboard/about_data_add1"element={<AboutData1 title="Add New"/>}/>

         {/* Home carousel client route  */}
        <Route path="/dashboard/home_carousel_client_list"element={<CLIENT_CAROUSEL_LIST/>}/>
        <Route path="/dashboard/home_carousel_client_edit/:about_id"element={<CLIENT_CAROUSEL_EDIT/>}/>
        <Route path="/dashboard/home_carousel_client_add"element={<CAROUSEL_CLIENT title="Add New"/>}/>
          {/* Home Expertise route  */}
          <Route path="/dashboard/home_expertise_list"element={<EXPERTISE_LIST/>}/>
          <Route path="/dashboard/home_expertise_edit/:about_id" element={<EXPERTISE_EDIT/>}/>
          <Route path="/dashboard/home_expertise_add"element={<HOME_EXPERTISE title="Add New"/>}/>
            {/* Home Pdd  route  */}
            <Route path="/dashboard/home_pdd_list"element={<PDD_LIST/>}/>
            <Route path="/dashboard/home_pdd_edit/:about_id" element={<PDD_EDIT/>}/>
            <Route path="/dashboard/home_pdd_add" element={<HOME_PDD title="Add New"/>}/>
             {/* Route of social mediaaaaaaaaaa  */}
             <Route path="/dashboard/media_list"element={<MEDIA_LIST/>}/>
             <Route path="/dashboard/media_edit/:about_id" element={<MEDIA_EDIT/>}/>
             <Route path="/dashboard/media_add" element={<MEDIA_ADD title="Add New"/>}/>
             {/* about team excutive */}
         <Route path="/dashboard/team_excutive_list" element={<TEAM_LIST/>}/>  
         <Route path="/dashboard/team_excutive_edit/:about_id" element={<TEAM_EDIT/>}/>
         <Route path="/dashboard/team_excutive_add"element={<Team_Data title="Add New"/>}/>

          {/* contact us route  */}
          <Route path="/dashboard/contact_us_list"element={<CONTACT_LIST/>}/>
          <Route path="/dashboard/contact_us_edit/:about_id" element={<CONTACT_EDIT/>}/>
          <Route path="/dashboard/contact_us_add"element={<CONTACT_US_ADD title="Add New"/>}/>

           {/* Blog page top route  */}
           <Route path="/dashboard/blog_list"element={<BLOG_LIST/>}/>
           <Route path="/dashboard/blog_page_edit/:about_id"element={<BLOG_EDIT/>}/>
           <Route path="/dashboard/blog_add"element={<BLOG_ADD title="Add New"/>}/>

            {/* OUR BLOGGGGGGG page top route  */}
            <Route path="/dashboard/our_blog_list"element={<OUR_BLOG_LIST/>}/>
            <Route path="/dashboard/our_blog_page_edit/:about_id"element={<OUR_BLOG_EDIT/>}/>
             <Route path="/dashboard/our_blog_add"element={<OUR_BLOG_ADD title="Add New"/>}/> 

              {/* route for  page heading setting */}
        <Route path="/dashboard/heading_list" element={<Heading_LIST/>}/>
        <Route path='/dashbaord/heading_edit/:about_id' element={<Heading_EDIT/>}/>
        <Route path="/dashboard/heading_add"element={<Heading_DETAILS title="Add New  "/>}/>

         {/* route for  page headerrrr setting  route*/}
         <Route path="/dashboard/navbar_list" element={<Navbar_LIST/>}/>
        <Route path='/dashbaord/navbar_edit/:about_id' element={<Navbar_EDIT/>}/>
        <Route path="/dashboard/navbar_add"element={<Navbar_DETAILS title="Add New  "/>}/>

        <Route path='/dashboard' element={ items ? <Dashboard/> : <Navigate to ='/dashboard/login'/>}/>
        <Route path="/dashboard/login" element={<AdminLogin/>}/>
        <Route path="/pages/landing-pages/Career/Jobform" element={<JobForm/>}/>
        <Route path="/frantend/landingpage/career/Jobview/:id"element={<JobView/>}/>

        <Route path="/frantend/landingpage/Author/Feedsection/:id" element={<Feedsection/>}/>

          {/* Job Upload description */}
          <Route path="/dashboard/job_upload_list" element={<Job_Upload_LIST/>}/>
           <Route path="/dashboard/job_upload_edit/:about_id" element={<JOB_UPLOAD_EDIT/>}/>
         <Route path="/dashboard/job_upload_add"element={<JOB_UPLOAD_ADD title="Add New"/>}/>


         
          {/* edit editor blog description */}
          <Route path="/dashboard/main_editor" element={<MAIN_EDITOR/>}/>


       {getRoutes(routes)}
        {/* <Route path="/presentation" element={<Presentation />} /> */}
        <Route path="*" element={<Navigate to="/main-page" />} />
      </Routes>
    </ThemeProvider>
  );
}
