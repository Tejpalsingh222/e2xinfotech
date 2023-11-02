import "./ourblog_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Ourblogdata from "../../components/datatable/Ourblogdata"

const ourblog_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Ourblogdata/>
      </div>
    </div>
)
}

export default ourblog_list
