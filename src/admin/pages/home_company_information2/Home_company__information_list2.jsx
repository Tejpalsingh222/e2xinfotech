import "./home_company_information_list2.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Comp from "../../components/datatable/Home_company_information2"

const Home_company_information_list2 = () => {
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

export default Home_company_information_list2
