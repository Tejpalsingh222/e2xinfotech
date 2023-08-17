import "./superheading_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Superheading from "../../components/datatable/Superheading"

const Superheading_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Superheading/>
      </div>
    </div>
)
}

export default Superheading_list
