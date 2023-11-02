import "./blog.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../blogdata";
import { useState,useEffect } from "react";
import { Link,useNavigate} from 'react-router-dom';
const Blog = () => {
  const [data, setData] = useState([])
  const [dedat, setRepos] = useState(null);
  const fetchUserData = () => {
    fetch("http://localhost:5000/get_blog")
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('welcome',data)
        setData(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  const navigate = useNavigate();
  const handleDelete = (id) => {
    // http://localhost:5000/delete/47
    const responseDel = fetch(`http://localhost:5000/delete-blog/${id}`, {
      method: "get",
    }).then((response) => {
      
      if(response.status==200)
      {
        alert('deleted data')
        setTimeout(function(){
          window.location.reload();
       }, 850);
      }
      
  }).catch((e)=>{
    alert("error");
    console.log('e',e);

  });
    
  };
 
  // const updateButton = (id) => {

  //   // http://localhost:5000/delete/47
  //   const responseDel = fetch(`http://localhost:5000/delete-blog/`, {
  //     method: "get",
  //   });
  //   return responseDel.json();
  // };
  const handleEdit = (id) => {
    navigate("/dashboard/blog_page_edit/"+ id);
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="editButton"
              onClick={() => handleEdit(params.row.id)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
       Blog show
        <Link to="/dashboard/blog_add" className="link">
          Add New Blog
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row.id}
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Blog;