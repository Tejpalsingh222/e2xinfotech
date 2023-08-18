import React, { useEffect, useState } from 'react';
export const userColumns = [
    { field: "id", headerName: "id", width: 70 },
    {
        field: "heading",
        headerName: "heading",
        width: 230,
      },
    {
      field: "paragraph",
      headerName: "paragraph",
      width: 100,
    },
  
      {
        field: "expert_image",
        headerName: "expert_image",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='' alt="avatar"/>
            </div>
          );
        },
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
  
   


