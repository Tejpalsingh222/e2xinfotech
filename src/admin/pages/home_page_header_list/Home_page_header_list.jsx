import "./home_page_header_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Home_page_header from "../../components/datatable/Home_page_header"

const Home_page_header_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Home_page_header/>
      </div>
    </div>
)
}

export default Home_page_header_list
