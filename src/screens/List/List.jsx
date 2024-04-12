import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DataTable from "../../components/DataTable/DataTable";
import "./List.css"

function List() {
    return(
        <div id="list">
            {/* <p>List</p> */} 
            <Sidebar />
            <div id="list-container">
                <Navbar />
                <DataTable />
            </div>
        </div>
    )
}

export default List;