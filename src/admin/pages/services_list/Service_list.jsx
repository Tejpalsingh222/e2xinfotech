import "./service_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Servicedata from "../../components/datatable/Servicedata"

const Service_list = () => {
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

export default Service_list
