export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "USER",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.userName}
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
      console.log(params);
      return (
        <div className="cellWithStatusContainer">
          <div className={`cellWithStatus ${params.row.status}`}>
            {/* {params.row.status} */}
            <p>{params.row.status}</p>
          </div>
        </div>
      );
    },
  },
];

const colour = 'white';

export const UserRows = [
  {
    id: 1,
    userName: "snow",
    email: "1snow@gmail.com",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    status: "active",
    age: 35,    
  },
  {
    id: 2,
    userName: "jamie",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    userName: "mai",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    userName: "ball",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    userName: "Cathern",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    age: null,
  },
  {
    id: 6,
    userName: "Shivam",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "6snow@gmail.com",
    status: "active",
    age: 150,
  },
  {
    id: 7,
    userName: "Alex",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "7snow@gmail.com",
    status: "pending",
    age: 44,
  },
  {
    id: 8,
    userName: "Rahul",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    userName: "Chetan",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "9snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    userName: "Roxie",
    img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
    email: "snow@gmail.com",
    status: "active",
    age: 24,
  },
];
