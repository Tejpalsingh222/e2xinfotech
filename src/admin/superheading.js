import React, { useEffect, useState } from 'react';
export const userColumns = [
    { field: "id", headerName: "id", width: 70 },
    {
        field: "page_heading",
        headerName: "page_heading",
        width: 230,
      },
    
    
    
  
    {
      field: "page_paragraph",
      headerName: "page_paragraph",
      width: 100,
    },
  
     
      
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  
  //temporary data
  
   


