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
      <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">E2X Infotech pvt ltd</span>
     </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
           <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            <p className="title">USER LISTS</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
            </li>
            </Link>
           {/*home page link */}
           <p className="title">HOME HEADER SETTING</p>
           <Link to='/dashboard/home_header_page_list' style={{textDecoration: "none"}}>
           <li><span >Home page header</span> </li>
           </Link>

          {/* company history route */}
           <Link to='/dashboard/home_company_list' style={{textDecoration: "none"}}>
           <li><span >Home Company History</span> </li>
           </Link>
            {/* company information route */}
           <Link to='/dashboard/home_information_list' style={{textDecoration: "none"}}>
           <li><span >Home Information list</span> </li>
           </Link> 
            {/* service route */}
            <p className="title">Home Our Services</p>
            <Link to="/dashboard/home_service_data_list" style={{textDecoration: "none"}}>
            <li>
              <CleaningServices className="icon" />
            <span>Service List</span>
            </li>
            <Link to="/dashboard/home_expertise_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Expertise List</span>
            </li>
             </Link>
            
             </Link>
             {/*about route */}
             <p className="title">Home </p> 
            
            {/* <Link to="/dashboard/home_service_data_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Service List</span>
            </li>
             </Link>  */}
             {/* route for home page
             
              <p className="title">Home</p>
              
            <Link to="/dashbaord/carousel_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Company_Information</span>
            </li>
            </Link>
            <Link to="/dashboard/about_add" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>header </span>
            </li>
             </Link>
            <Link to="/dashboard/about_list" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>footer</span>
            </li>
             </Link>
             <Link to="/dashbaord/company_list/" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Company_list</span>
            </li>
             </Link>
            
            
             <Link to="/dashbaord/expert_list/" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Expertise List</span>
            </li>
             </Link>
             {/**route for pdd fact  */}
           
             <Link to="/dashboard/home_pdd_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Pdd fact list</span>
            </li>
             </Link>
               {/** card carousel route  */}
              
             <Link to="/dashboard/home_carousel_client_list" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Card Carousel List</span>
            </li>
            </Link>
               {/** card temp service route out */}
               
             <Link to="/dashbaord/card_temp_list/" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Service Slider list</span>
            </li>
            </Link>
             {/** user route login logout */}
              {/*homeiamge link */}
              <Link to="/dashboard/home_image_list/" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span>Home image list</span>
            </li>
            </Link>
            {/* superheading link */}
            <Link to="/dashbaord/super_heading_list/" style={{textDecoration: "none"}}>
            <li>
              <List className="icon" />
            <span> Super heading list</span>
            </li>
            </Link>
            
            <p className="title">USER</p>
            <li>
              <SettingsOutlinedIcon className="icon" />
            <span>Profile</span>
            </li> 
           
             
            <li>
              <InputOutlinedIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
            </li>
            <Link/>
           
        </ul>

    </div>
    {/* <div className="bottom">
        <div className="colorOption" 
        onClick={() => dispatch({ type : "LIGHT"})}>
        </div> */}

          {/* <div className="colorOption"
        onClick={() => dispatch({ type : "DARK"})}>
        </div> */}

    </div>
    // </div>
  )
}

export default Sidebar
