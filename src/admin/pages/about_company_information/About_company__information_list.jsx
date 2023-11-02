import "./about_company_information_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Comp from "../../components/datatable/About_company_information"

const About_company_information_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Comp/>
      </div>
    </div>
)
}

export default About_company_information_list
