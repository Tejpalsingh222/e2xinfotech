import "./jobs_upload_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Comp from "../../components/datatable/Jobs_upload_data"

const Jobs_upload_list = () => {
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

export default Jobs_upload_list
