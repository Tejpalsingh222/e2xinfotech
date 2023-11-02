import "./blog_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Expertise from "../../components/datatable/Expertise"
import Blog from "admin/components/datatable/Blog"

const Blog_list = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <Expertise/> */}
        <Blog/>
      </div>
    </div>
)
}

export default Blog_list
