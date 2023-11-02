import "./team_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Teamdata from "../../components/datatable/Teamdata"

const team_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Teamdata/>
      </div>
    </div>
)
}

export default team_list
