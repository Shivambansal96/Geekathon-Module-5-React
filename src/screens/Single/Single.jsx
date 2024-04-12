import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import edit from "../../assets/Information/digital-art.gif";
import "./Single.css"
import Chart from "../../components/Charts/Chart";
import SingleTable from "../../components/Table/Table";

function Single(props) {
    return(
        <div id="single">
            {/* <p>Single</p> */}
            <Sidebar />
            <div className="single-container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        
                        <div className="up">
                            <h2 className="title">
                                <p>Information</p>
                            </h2>
                        </div>

                        <div className="down">
                                                        
                            <div className="flex-start">
                                <img src="https://i.pinimg.com/originals/3e/37/a1/3e37a1bd45c70cb972bf95105ba4adc6.jpg" alt="avatar" />
                            </div>

                            <div className="flex-end">
                                <button className="edit-button"><img src={edit} alt="" /></button>
                                <h2 className="itemTitle">Jane Doe</h2>
                                {/* <h2 className="itemTitle">{props.title}</h2> */}

                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+372832932</span>
                                </div>
                                
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Lorem ipsum dolor sit amet consectetur adipi.</span>
                                </div>
                                
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                </div>

                    <div className="right">
                        <Chart aspect={3 / 1} title='User Spending (Last 6 months)' />
                    </div>
                </div>

                <div className="bottom">
                <h2 className="title">Last Transactions</h2>
                <SingleTable />
                </div>
            </div>
        </div>
    )
}

export default Single;