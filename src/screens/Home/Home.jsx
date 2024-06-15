// import { Table } from "@mui/material";
import Chart from "../../components/Charts/Chart";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/featuredCharts/Featured";
import Table from "../../components/Table/Table";

import "./Home.css"
import SingleTable from "../../components/Table/Table";


function Home() {
    return(
        
        <div id="home">
                <Sidebar />
            <div id="home-container">
                <Navbar />
                <div id="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
        
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title='Last 6 months' />
                </div>

                <div className="list-container">
                    <div className="listTitle">
                        <p>Latest Transactions</p>
                    </div>
                    <SingleTable /> 
                </div>

            </div>

            
            {/* Home-container */}
        </div>
    )
}

export default Home;