import { UserRows, userColumns } from "../../dataSrc";
import "./DataTable.css";
import eye from "../../assets/DataTable/eye.gif";
import bin from "../../assets/DataTable/trash-bin.gif";
import { Link } from "react-router-dom";


import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


function DataTable() {
    
    // const rows = [
        //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        //     { id: 5, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        //     { id: 6, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        //     { id: 7, lastName: 'Melisandre', firstName: null, age: 150 },
        //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        //   ];
        
        // const columns = [
            //     { field: "id", headerName: "ID", width: 70 },
    //     { field: "firstName", headerName: "First name", width: 130 },
    //     { field: "lastName", headerName: "Last name", width: 130 },
    //     {
    //         field: "age",
    //         headerName: "Age",
    //         type: "number",
    //         width: 90,
    //     },
    //     {
    //         field: "fullName",
    //         headerName: "Full name",
    //         description: "This column has a value getter and is not sortable.",
    //         sortable: false,
    //         width: 160,
    //         renderCell:(params)=> {

    //             console.log(params)
    //             return(
        //                 <div>
        //                     <span>{params.row.lastName}</span>
        //                     {/* <span>"HELLO"</span> */}
    //                     <span>{params.row.age}</span>
    //                 </div>
    //             )
    //         }
    //     },
    // ];
    
    const [data, setData] = useState(UserRows)
    
    function deleteHandler(id) {
        setData(data.filter(item=>item.id !== id))
    }
    
    const actionColumn = [
            {
                field:'action', headerName:'Action', width: 180, renderCell:(params)=> {
        
        
                    return(

                        <div id="action">
                            <div className="button-container">
                                {/* <div id="view-button">View</div> */}
                            <Link to='/users/test' style={{textDecoration: 'none'}}>
                                <button><img src={eye} alt="View" /></button>
                            </Link>

                            <Link to='/users' style={{textDecoration: 'none'}}> 
                                <button><img src={bin} onClick={()=>deleteHandler(params.row.id)} alt="Delete" /></button>
                            </Link>
                                {/* <div id="delete-button">Delete</div> */}
                            </div>
                        </div>
                    )
                }
            }
        ]

    const {darkMode} = useContext(DarkModeContext)


        const style = {
            color:'red',
            fontStyle:'italics', 
            fontSize: '20px'
        } ;

        return (
            
            <div id="dataTable">
            <div className="dataTableTitle">
                <p>Users</p>
                <Link to='/users/new' className="link" style={{textDecoration: 'none'}}>Add User</Link>
            </div>
            <DataGrid id='dataChanges' 
                style={darkMode ? {color:'red'} : {color:'black'}} 
                rows={data} 
                columns={userColumns.concat(actionColumn)}
                pageSize={10}       
                rosPerPageOptions={[5, 10]}
                checkboxSelection
                />        
        </div>
    );
}

export default DataTable;
