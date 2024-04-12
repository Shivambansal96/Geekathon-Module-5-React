// import { List } from "@mui/material";
import "./Table.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function SingleTable() {
  const rows = [
    {
      id: 113233,
      product: "Acer Nitro 5",
      img: "https://d28i4xct2kl5lp.cloudfront.net/product_images/329408_e1e5437e-5aeb-43f4-8d9b-951dcf1e571d.jpg",
      customerName: "Jon Snow",
      date: "16th March",
      amount: 83000,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 133114,
      product: "PlayStation 5",
      img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
      customerName: "Jamie Lannister",
      date: "2nd September",
      amount: 54000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 122333,
      product: "Keyboard",
      img: "data:image/jpeg;base64,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",
      customerName: "Cersei Lannister",
      date: "26th Aug",
      amount: 12000,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 152233,
      product: "Mouse",
      img: "https://th.bing.com/th/id/OIP.8S7KGKQQkHOjbInhLPJYIgHaE5?w=279&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      customerName: "Arya Stark Bansal",
      date: "4th Dec",
      amount: 6000,
      method: "Online Payemnt",
      status: "Approved",
    },
    {
      id: 113543,
      product: "PSP",
      img: "https://th.bing.com/th/id/OIP.DqjwHsSDggRcFU4L5cLH6gHaGK?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      customerName: 'Daenerys Targaryen',
      date: "3rd Jan",
      amount: 33000,
      method: "Online Payment",
      status: "Rejected",
    },
  ];

  return (
    <div id="single-table">    
      {/* Table    */}
        <div id="table-container">

            <TableContainer component={Paper} id="table-table" >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='tableHead'>
                  <TableRow style={{backgroundColor:'black'}}>
                  
                    <TableCell style={{color:'gray'}}
                    className="tabelCellHeading tableCell">Tracking ID</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Product</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Name</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Date</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Amount</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Payment Method</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Status</TableCell>    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (

                    <TableRow key={row.id} >
                      <TableCell className="tableCell tabelCellData tabelCellDataId" >{row.id}</TableCell>
                      {/* <TableCell className="tableCell" >{row.product}</TableCell> */}
                      <TableCell className="tableCell tabelCellData" >
                        <div className="cellWrapper">
                            <img src={row.img} alt="" className="image" />
                            {row.product}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell tabelCellData" >{row.customerName}</TableCell>
                      <TableCell className="tableCell tabelCellData" >{row.date}</TableCell>
                      <TableCell className="tableCell tabelCellData" >Rs {row.amount}/-</TableCell>
                      <TableCell className="tableCell tabelCellData" >{row.method}</TableCell>
                      <TableCell className="tableCell tabelCellData" >
                        <span className={`status ${row.status}`}>{row.status}</span>
                      </TableCell>
                    </TableRow>
                ))}

                </TableBody>
              </Table>
            </TableContainer>

        </div>
    </div>
  );
}

export default SingleTable;
