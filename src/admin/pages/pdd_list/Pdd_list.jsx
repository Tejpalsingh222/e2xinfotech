import "./pdd_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Pdddata from "../../components/datatable/Pdddata"

const Pdd_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Pdddata/>
      </div>
    </div>
)
}

export default Pdd_list
