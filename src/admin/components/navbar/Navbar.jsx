import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";
import { getUser } from '../../Utils/common';
import MKButton from "components/MKButton";
import { useNavigate } from "react-router-dom";


import {Link} from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(DarkModeContext)
  const user=getUser();

  const removeSesion = ()=>{
    localStorage.removeItem('dashboard-user')
    navigate('/dashboard/login')
  }
  const newuser='tej';
  console.log('checkuserss',newuser);
  return (
    <div className="navbar">
      <div className="wrapper">
      {/* <Link to="/users" style={{textDecoration: "none"}}> */}
         
            
            <h2>E2X INFOTECH PVT LTD</h2>
            {/* </Link>  */}
        {/* <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchOutlinedIcon />
        </div> */}
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          {/* <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({type:"TOGGLE"})}/>
          </div> */}
          {/* <div className="item">
            <FullScreenExitOutlinedIcon className="icon" />
          </div> */}
          {/* <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">5</div>
          </div> */}
          
          {/* <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div> */}
          <div className="Logout">
          <MKButton  style={{ maxWidth: '90px', maxHeight: '35px', minWidth: '30px', minHeight: '30px',}}  variant='gradient'  onClick={removeSesion} >
                      Logout
                   </MKButton>
                   </div>
                    {/* <div className="item">
                       <ListOutLinedIcon className="icon" />
                       </div> */}
                       {/* <div className="item">
                        <h6>{!newuser[0] ? 'please login' : newuser[0] }</h6>
                        </div> */}
                        </div>
                        </div>
                        </div>
                        )
                      }
export default Navbar
