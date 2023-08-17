import "./cardcarousel_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Cardcarouseldata from "../../components/datatable/Cardcarouseldata"

const Cardcarousel_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Cardcarouseldata/>
      </div>
    </div>
)
}

export default Cardcarousel_list
