import React, { useEffect, useState } from 'react';
export const userColumns = [
    { field: "id", headerName: "id", width: 70 },
    {
        field: "about_company",
        headerName: "about_company",
        width: 230,
      },
    
    
    
  
    {
      field: "about_paragraph",
      headerName: "about_paragraph",
      width: 100,
    },
  
      {
        field: "about_image",
        headerName: "about_image",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='' alt="avatar" />
              
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
  
  
  //temporary data
  
   


