import "./super_heading_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Comp from "../../components/datatable/Super_heading_data"

const Super_heading_list = () => {
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

export default Super_heading_list
