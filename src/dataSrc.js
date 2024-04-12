export const userColumns = [
  { field: "id", headerName: "Tracking ID", width: 120 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" /> &nbsp;&nbsp;&nbsp;
          <p>{params.row.userName}</p>
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
    renderCell: (params) => {
      return(
      <div className="cellWithEmail">
        <p>{params.row.email}</p>
      </div>
      )
    }
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
    userName: "Jane Doe",
    email: "janedoe@gmail.com",
    img: "https://i.pinimg.com/originals/3e/37/a1/3e37a1bd45c70cb972bf95105ba4adc6.jpg",
    status: "active",
    age: 32,    
  },
  {
    id: 2,
    userName: "Jaime Lannister",
    img: "https://th.bing.com/th?id=OSK.8e04e40696c98910d0871c73f0114f9f&w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM",
    email: "jaime@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    userName: "Cersei Lannister",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAGYAZgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAADBAUCAQAG/9oACAEBAAAAAPochi+w3ULIqc6bMTiIN0KqLpPGH8+RcbLB+mN3XIQ1WfOdZ6cmgxFCsAO4fhDbRWmH3vNDvtmRJNV2bRHNcJoO505kbO9UCaymynLY83GfoObJF8jnZRzHyArWPkc1ZRGAgMwoL6b46loA9tpaY6pb+ToPLqMOTwOP99//xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oACgICEAMQAAAAdNFYvm4wxbtVc2XSzec3zxgqLdmoZwVF7JtcYzzt22anTnndyKDcf//EAC4QAAICAQMCBAUDBQAAAAAAAAECAAMRBBIhMUETIjJRECNhcYEzUrEUJEJic//aAAgBAQABPwDEIjsFVmPQDJi6vUX37K+Fh06qWd3Zm7t0EBVG4TB/ORKtbanfcvsZRqK7uhw3tLfSZWfnmAwn4tNba7rYigkQFdLSu1FzwDjqTH1Cu4fnI6Ax7C0RXlXk2kdpZbvSULmxjN2IOYOsLRjnM1V7BCi9+BK8Ois58qqZvVgzsOM8D+BEXJyYoiCMSoK9u0046mE8xek7wj4IVa1yRnapU/mWeEta172KgemM5dgB26AdBBhFgdwf0jj7xSpXd7DJi2i1M71PbA7TT+mHrFPEU/DUNsqaaNSyP9W/iKhtz78mJUEs2xkJHBngPnJcytdwNZPDQVIlHlHQzT+mN6osWZmuJ8ISrCVFzgYQAD7TRsC5TuASI/6rfQ4m6dREFhZQq/ckyzhCv1zKPTD1gMQwXOD5hNQC9BP7eZqX21qg6H+BNJ5b2P8AoYTttbPczgzzAeXGZT4jMJZjxSoPROZX0meYIpiqBjPJMubjwU6kcn2mtpCqmOi8RQVZWHXMZQyhoNyxfEI/TJi6iqtjvOCO3eJYXY2YxvbP4lQ6iFBmbZjmK5awfQwY3k9yZrHXisfczGVcn7CFTWtaHrjJm3kQHauMx2FlthHvkRbApqx0KxdTXWRvyAe8Syuz0OD8AkrYICxn9WuVA7kCXbiXz1leAys3pyCZczHUWk+8U8Ay52Ccd4AUw3ccGVjxUbHbBlTnBVxlZaG09m0N9RNFrDb5H69jFYETU3Fnbrj2mnBZj+49JqaQucnoBky1/lnb9AJXZ41IY+pcc/SK6qCG7S5wVDAHiM4cFsAZMqYV6fA6nkywKc4muszbX/zErsNYZh1XmVWZAPuI1hdhiaBlQ22sPQJfc9pwTxGB8O0RPk0ID6rTu/AgbbYrHlTL9ShoYY7Szy1DPULEO5eO4BikkZjV137QeG/xMupdLFQ+luSftNI++lTO80zFnKe4MsTa0s4qZvcETWH+4Ydkwo/E0rB8ZAIMbT1IMhZqugHuZSSSa/flT7ETT3NYpJ6ieGO3fDia8AUu3sQZoGIr/AM//8QAGxEAAgMBAQEAAAAAAAAAAAAAAAECEDEgETD/2gAIAQIBAT8AG69+cs7lnCt2jLeCpDIunjEPBaMW1//EABoRAQEBAAMBAAAAAAAAAAAAAAEAEBEgMQL/2gAIAQMBAT8Ag4xB78zp70dPen1prJzcYTDMSYezHt9ROf/Z",
    email: "cersei@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    userName: "Arya Stark",
    img: "https://www.bing.com/th?id=OIP.TXrF97SBSNNlDm-57K28xgHaKU&w=155&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    email: "arya4@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    userName: "Daenerys Targaryen",
    img: "https://th.bing.com/th?id=OIP.1uM7qY9Lq9ZKE21GMLVvqQAAAA&w=298&h=204&c=12&rs=1&qlt=99&pcl=faf9f7&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=MultiSMRSV2Source",
    email: "daen26@gmail.com",
    status: "passive",
    age: null,
  },
  {
    id: 6,
    userName: "Melisandre",
    img: "https://th.bing.com/th?id=OSK.mmcolTePofeQk550WptpBFIYq6OzF4tLTpfzmWndNygalgc4&w=130&h=100&c=8&o=6&dpr=1.3&pid=SANGAM",
    email: "melisandre@gmail.com",
    status: "active",
    age: 150,
  },
  {
    id: 7,
    userName: "Ferrara Clifford",
    img: "https://th.bing.com/th?id=OIP.ihcsnGDOjODa2HNnX9CG8AAAAA&w=80&h=80&c=1&vt=10&bgcl=c1b04d&r=0&o=6&dpr=1.3&pid=5.1",
    email: "ferrara@gmail.com",
    status: "pending",
    age: 44,
  },
  {
    id: 8,
    userName: "Rossini Frances",
    img: "https://th.bing.com/th?id=OIP.DmnsQXiw4dsQ51_OkDD44gHaEK&w=298&h=204&c=12&rs=1&qlt=99&pcl=faf9f7&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=MultiSMRSV2Source",
    email: "rossini@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    userName: "Harvey Specter",
    img: "https://th.bing.com/th?id=OSK.HEROGdf12PhHnaU0NlwDWAC8DFqGQfLeO_d8hZOO4I3YuN0&w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM",
    email: "harvey@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    userName: "Mike Ross",
    img: "https://th.bing.com/th/id/OIP.H4n616-Ey2zLoQdZyi4dYAHaIk?w=127&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    email: "mikeross@gmail.com",
    status: "active",
    age: 24,
  },
];

