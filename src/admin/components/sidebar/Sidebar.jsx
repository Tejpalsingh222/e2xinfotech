import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import CleaningServices from '@mui/icons-material/CleaningServices';
import Add from '@mui/icons-material/Add';
import List from '@mui/icons-material/List';

import {Link} from "react-router-dom";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";
import {useNavigate} from 'react-router-dom';
import { getUser, removeUserSession } from '../../Utils/common';

const Sidebar = (props) => {
  const user = getUser();

  const {dispatch} = useContext(DarkModeContext)
  const navigate = useNavigate();
  const handleLogout = () => {      
    removeUserSession();
    navigate('/dashboard/login');
  }

  return (
    
    <div className="sidebar"> 
    <div className="top">
      {/* <Link to="/" style={{textDecoration: "none"}}> */}
        <span className="logo">E2X Infotech Pvt Ltd</span>
     {/* </Link> */}
    </div>
    <hr />
    <div className="center">
        <ul>
        <p className="title">HOME PAGE SETTING</p>

           {/* <Link to='/dashboard/navbar_list' style={{textDecoration: "none"}}>
           <li><List className="icon" />
            <span >Navbar</span> </li>
           </Link> */}


           <Link to='/dashboard/home_header_page_list' style={{textDecoration: "none"}}>
           <li><List className="icon" />
            <span> Page header</span> </li>
           </Link>
{/* 
           <Link to='/dashboard/home_header_page_list2' style={{textDecoration: "none"}}>
           <li><List className="icon" />
            <span >About page header</span> </li>
           </Link> */}
          {/* company history route */}
           <Link to='/dashboard/home_company_list' style={{textDecoration: "none"}}>
           <li>
           <List className="icon" /><span >Company History</span> </li>
           </Link>
            {/* company information route */}
           <Link to='/dashboard/home_information_list' style={{textDecoration: "none"}}>
           <li>
           <List className="icon" />
           <span >Information list</span> </li>
           </Link> 

           <Link to='/dashboard/home_information_list2' style={{textDecoration: "none"}}>
           <li>
           <List className="icon" />
           <span >Information list 2</span> </li>
           </Link> 

           <p className="title">ABOUT PAGE SETTING</p>
           <Link to='/dashboard/about_information_list' style={{textDecoration: "none"}}>
           <li>
           <List className="icon" />
           <span >About_Information</span> </li>
           </Link> 

           <Link to='/dashboard/about_data_list' style={{textDecoration: "none"}}>
           <li>
           <List className="icon" />
           <span >Company_Image</span> </li>
           </Link> 

           <Link to='/dashboard/about_data_list1' style={{textDecoration: "none"}}>
           <li>
           <List className="icon" />
           <span >Company_Profile</span> </li>
           </Link> 
            {/* service route */}
            <p className="title">SERVICES SETTING</p>
            <Link to="/dashboard/home_service_data_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Service List</span>
            </li>
            <Link to="/dashboard/home_expertise_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Expertise List</span>
            </li>
             </Link>
             <Link to="/dashboard/contact_us_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Contact List</span>
            </li>
             </Link>

             <Link to="/dashboard/media_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Socialmedia List</span>
            </li>
             </Link>
            
             </Link>
             {/*about route */}
             <p className="title">OTHER EDITS</p>  
             <Link to="/dashboard/home_pdd_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>  Facts list</span>
            </li>
             </Link>
               {/** card carousel route  */}
              
             <Link to="/dashboard/home_carousel_client_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Client List</span>
            </li>
            </Link>

            <Link to="/dashboard/team_excutive_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Our Team List</span>
            </li>
            </Link>
             
            <Link to="/dashboard/blog_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Blog List</span>
            </li>
            </Link>

            <Link to="/dashboard/our_blog_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Our Blog Page</span>
            </li>
            </Link>
            <Link to="/dashboard/heading_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Heading List</span>
            </li>
            </Link>
            <Link to="/dashboard/job_upload_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Job Description</span>
            </li>
            </Link>

            {/* <Link to="/dashboard/main_editor" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Main Editor</span>
            </li>
            </Link> */}
            {/* <p className="title">USER</p>  
            <li>
              <InputOutlinedIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
            </li> */}
            <Link/>
        </ul>
    </div>
    </div>
  )
}

export default Sidebar
