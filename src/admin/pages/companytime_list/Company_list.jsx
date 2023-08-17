import "./company_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Companydata from "../../components/datatable/Companydata"

const Company_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Companydata/>
      </div>
    </div>
)
}

export default Company_list
