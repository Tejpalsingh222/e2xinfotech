export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
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
export const userRows = [
  {
    id: 1,
    username: "Tejpal singh",
    img: "https://pps.whatsapp.net/v/t61.24694-24/299007329_635167487805954_791033754617318626_n.jpg?ccb=11-4&oh=01_AdTCN5Q_GQA7f66w8JGF7PyKPmeHW0gEV5pb7aWOsoPtNA&oe=64466D37",
    status: "active",
    email: "tejpalkhanauri@gmail.com",
    age: 22,
  },
  
  
];