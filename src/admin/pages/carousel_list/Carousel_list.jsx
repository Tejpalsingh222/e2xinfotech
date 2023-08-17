import "./carousel_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Carouseldata from "../../components/datatable/Carouseldata"

const Carousel_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Carouseldata/>
      </div>
    </div>
)
}

export default Carousel_list
