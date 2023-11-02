import "./jobs_upload_data.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../jobs_upload_data";
import { useState,useEffect } from "react";
import { Link,useNavigate} from 'react-router-dom';
const Jobs_upload_data = () => {
  const [data, setData] = useState([])
  const [dedat, setRepos] = useState(null);
  const fetchUserData = () => {
    fetch("http://localhost:5000/get_jobs_upload_info/")
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log(data)
        setData(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  const updateButton = ()=>{

  }
  const navigate = useNavigate();
  const handleDelete = (id) => {
    // http://localhost:5000/delete/47
    const responseDel = fetch(`http://localhost:5000/delete-Job_upload/${id}`, {
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
  const updateStatus = (id)=>{
    // alert(id)
  }
  const handleEdit = (id) => {
    navigate("/dashboard/job_upload_edit/" + id);
  }


  const actionColumn = [
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //   },
    // },
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
       Job Offers
        <Link to="/dashboard/job_upload_add" className="link">
          Add New Jobs
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

export default Jobs_upload_data;