import "./expertise_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Expertise from "../../components/datatable/Expertise"

const Expertise_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Expertise/>
      </div>
    </div>
)
}

export default Expertise_list
