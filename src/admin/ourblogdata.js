import React, { useEffect, useState } from 'react';
export const userColumns = [
    // { field: "id", headerName: "id", width: 70 },
    {
        field: "blog_title",
        headerName: "Blog Title",
        width: 230,
      },
    {
      field: "blog_para",
      headerName: "Blog paragraph",
      width: 200,
    },

    {
      field: "testomonials",
      headerName: "Testomonials",
      width: 200,
    },
  
      {
        field: "blog_image",
        headerName: "Blog Image",
        width: 100,
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
  
   


