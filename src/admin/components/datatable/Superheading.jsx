import "./superheading.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../superheading";
import { useState,useEffect } from "react";
import { Link,useNavigate} from 'react-router-dom';
const Superheading = () => {
  const [data, setData] = useState([])
  const [dedat, setRepos] = useState(null);
  const fetchUserData = () => {
    fetch("http://localhost:5000/getSuper_heading")
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
    const responseDel = fetch(`http://localhost:5000/delete-super_heading/${id}`, {
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
  {

  }

    
  };
 
  const updateButton = (id) => {

    // http://localhost:5000/delete/47
    const responseDel = fetch(`http://localhost:5000/delete/`, {
      method: "get",
    });
    return responseDel.json();
  };
  const handleEdit = (id) => {
    navigate("/dashbaord/edit-super_heading/" + id);
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
        Show Heading
        <Link to="/dashboard/add_super_heading/" className="link">
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

export default Superheading;