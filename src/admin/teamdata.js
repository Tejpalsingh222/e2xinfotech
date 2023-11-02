import React, { useEffect, useState } from 'react';
export const userColumns = [
    // { field: "id", headerName: "id", width: 70 },
    {
        field: "excutive_title",
        headerName: "Excutive_Title",
        width: 150,
      },
      {
        field: "team_position",
        headerName: "Team_Position",
        width: 230,
      },
    {
      field: "excutive_intro",
      headerName: "Excutive_Intro",
      width: 200,
    },
  
      {
        field: "team_image",
        headerName: "Team_Image",
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
  
  
  //temporary data
  
   


