import "./contact_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Contactdata from "../../components/datatable/contactdata"

const contact_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Contactdata/>
      </div>
    </div>
)
}

export default contact_list
