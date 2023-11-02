import "./media_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Mediadata from "../../components/datatable/Mediadata"

const media_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Mediadata/>
      </div>
    </div>
)
}

export default media_list
