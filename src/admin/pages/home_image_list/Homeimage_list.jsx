import "./home_image_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Himage from "../../components/datatable/Home_image";

const Homeimage_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Himage/>
      </div>
    </div>
)
}

export default Homeimage_list
