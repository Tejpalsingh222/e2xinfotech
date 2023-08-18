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
//service route //

import Service_list from "admin/pages/footer_list/Service_list";
import Service_edit from "admin/pages/footer_list/Service_edit";
import ServiceData from   "admin/pages/services/Service";


import CLIENT_CAROUSEL_LIST from "admin/pages/cardcarousel_list/Cardcarousel_list";
import CLIENT_CAROUSEL_EDIT from "admin/pages/cardcarousel_list/Cardcarousel_edit";
import CAROUSEL_CLIENT from "admin/pages/cardcarousel/Cardcarousel";


import EXPERTISE_LIST from "admin/pages/expert_list/Expertise_list";
import EXPERTISE_EDIT from "admin/pages/expert_list/Expertise_edit";
import HOME_EXPERTISE from "admin/pages/expert/Expertise";

import PDD_LIST from "admin/pages/pdd_list/Pdd_list";
import PDD_EDIT from "admin/pages/pdd_list/Pdd_edit";
import HOME_PDD from "admin/pages/pdd/Pdd";

// Material Kit 2 React routes
import AdminLogin from "admin/pages/login/Login";
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
        <Route path="/dashboard/home_header_page_list" element={<HOME_HEADER_LIST_PAGE/>}/>
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
         {/* Home service route  */}
         <Route path="/dashboard/home_service_data_list" element={<Service_list/>}/>  
         <Route path="/dashboard/home_service_data_edit/:about_id" element={<Service_edit/>}/>
         <Route path="/dashboard/home_sercice_data_add"element={<ServiceData title="Add New"/>}/>
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


        <Route path='/dashboard' element={ items ? <Dashboard/> : <Navigate to ='/dashboard/login'/>}/>
        <Route path="/dashboard/login" element={<AdminLogin/>}/>

  
        {getRoutes(routes)}
        {/* <Route path="/presentation" element={<Presentation />} /> */}
        <Route path="*" element={<Navigate to="/main-page" />} />
      </Routes>
    </ThemeProvider>
  );
}
