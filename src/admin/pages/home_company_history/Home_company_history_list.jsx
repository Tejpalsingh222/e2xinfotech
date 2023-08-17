import "./home_company_history_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Comp from "../../components/datatable/Home_company_history"

const Home_company_history_list = () => {
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

export default Home_company_history_list
