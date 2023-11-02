import React, { useEffect, useState } from 'react';
export const userColumns = [
    // { field: "id", headerName: "id", width: 70 },
    {
        field: "about_company",
        headerName: "About_company",
        width: 230,
      },
    {
      field: "about_paragraph",
      headerName: "About_paragraph",
      width: 200,
    },
  
      {
        field: "about_image",
        headerName: "About_image",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='' alt="avatar" />
              
            </div>
          );
        },
      },
      
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  
  
  //temporary data
  
   


