import "./home_image.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../home_image";
import { useState,useEffect } from "react";
import { Link,useNavigate} from 'react-router-dom';
const Home_image = () => {
  const [data, setData] = useState([])
  const [dedat, setRepos] = useState(null);
  const fetchUserData = () => {
    fetch("http://localhost:5000/get_home_under_image")
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log(data)
        setData(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  const navigate = useNavigate();
  const handleDelete = (id) => {
    // http://localhost:5000/delete/47
    const responseDel = fetch(`http://localhost:5000/delete-home_under_image/${id}`, {
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
 
  const updateButton = (id) => {

    // http://localhost:5000/delete/47
    const responseDel = fetch(`http://localhost:5000/delete/`, {
      method: "get",
    });
    return responseDel.json();
  };
  const handleEdit = (id) => {
    navigate("/dashbaord/edit_home_image/" + id);
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
            <div
              className="updateButton"
              onClick={() => updateButton(params.row.id)}
            >
              Active
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Show Home image
        <Link to="/dashbaord/add_home_image/" className="link">
          Add New 
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row.id}
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Home_image;