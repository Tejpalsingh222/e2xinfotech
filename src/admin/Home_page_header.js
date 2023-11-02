import React, { useEffect, useState } from 'react';
export const userColumns = [
    // { field: "id", headerName: "id", width: 70 },
    {
        field: "title",
        headerName: "Title",
        width: 230,
      },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },

    {
      field: "pagelink",
      headerName: "Page_Link",
      width: 200,
    },
  
      {
        field: "image",
        headerName: "Image",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='' alt="avatar" />
              
            </div>
          );
        },
      },
  ];
  
  
  //temporary data
  
   


