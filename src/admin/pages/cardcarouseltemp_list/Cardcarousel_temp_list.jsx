import "./cardcarousel_temp_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Cardcarouseltemp from "../../components/datatable/Cardcarouseltemp"

const Cardcarousel_temp_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Cardcarouseltemp/>
      </div>
    </div>
)
}

export default Cardcarousel_temp_list
