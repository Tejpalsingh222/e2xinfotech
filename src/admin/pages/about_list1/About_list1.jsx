import "./about_list1.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Servicedata from "../../components/datatable/Aboutdata1"

const About_list1 = () => {
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

export default About_list1
