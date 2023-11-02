import "./about_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Servicedata from "../../components/datatable/Aboutdata"

const About_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Servicedata/>
      </div>
    </div>
)
}

export default About_list
