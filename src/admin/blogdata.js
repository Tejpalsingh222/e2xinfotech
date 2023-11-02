import React, { useEffect, useState } from 'react';
export const userColumns = [
    // { field: "id", headerName: "id", width: 70 },
    {
        field: "title",
        headerName: "Title",
        width: 200,
      },
    {
      field: "description",
      headerName: "Decription",
      width: 230,
    },
      {
        field: "image",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='' alt="avatar"/>
            </div>
          );
        },
      },
  ];
  
   


