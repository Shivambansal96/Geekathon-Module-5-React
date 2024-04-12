import "./Sidebar.css"
// import DashboardIcon from '@mui/icons-material/Dashboard';

import dashBoard_icon from "../../assets/dashBoard.gif"
import user_icon from "../../assets/user.gif"
import products_icon from "../../assets/products.gif"
import order_icon from "../../assets/online-order.gif"
import truck_icon from "../../assets/pickup-truck.gif"
import stats_icon from "../../assets/stats.gif"
import notifications_icon from "../../assets/notifications.gif"
import health_icon from "../../assets/health-lungs.gif"
import history_icon from "../../assets/history-book.gif"
import settting_icon from "../../assets/settings.gif"
import profile_icon from "../../assets/curriculum-vitae.gif"
import logout_icon from "../../assets/exit.gif"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react"




function Sidebar(){

    const {dispatch} = useContext(DarkModeContext)

    console.log(dispatch)

    return(
        <div id="sidebar">
                {/* Sidebar */}

                <div id="logo">
                    <Link to='/homepage' style={{textDecoration: 'none'}}>
                        <h2>Demon_God</h2>                
                    </Link>
                </div>

                <hr />

                <div id="list">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                    <img src={dashBoard_icon} className="icon" />
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LIST</p>
                
                <Link to='/users' style={{textDecoration: 'none'}}>
                    <li>
                        <img src={user_icon} className="icon" />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to='/products' style={{textDecoration: 'none'}}>
                    <li>
                        <img src={products_icon} className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                        <img src={order_icon} className="icon" />
                        <span>Orders</span>
                    </li>
                </Link>
                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                        <img src={truck_icon} alt="truck" className="icon" />
                        <span>Delivery</span>
                    </li>
                </Link>
                
                    <p className="title">USEFUL</p>
                
                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                        <img src={stats_icon} className="icon" />
                        <span>Stats</span>
                    </li>
                    </Link>
                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                        <img src={notifications_icon} className="icon"/>
                        <span>Notifications</span>
                    </li>
                </Link>

                    <p className="title">SERVICE</p>

                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                    <img src={health_icon} className="icon" />
                        <span>System Health</span>
                    </li>
                    </Link>
                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                    <img src={history_icon} className="icon" />
                        <span>Logs</span>
                    </li>
                    </Link>
                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                    <img src={settting_icon} className="icon" />
                        <span>Settings</span>
                    </li>
                    </Link>

                    <p className="title">USER</p>
                    
                {/* <Link to='/orders' style={{textDecoration: 'none'}}> */}
                <a style={{textDecoration:'none'}} href="https://shivambansal96.github.io/oibsip_taskno.2/">
                    <li>
                        <img src={profile_icon} className="icon" />
                            <span>Profile</span>
                    </li>
                </a>
                {/* </Link> */}

                <Link to='/orders' style={{textDecoration: 'none'}}>
                    <li>
                    <img src={logout_icon} className="icon" />
                        <span>Logout</span>
                    </li>
                </Link>
                </ul>
                </div>

                <div id="color-options">
                    {/* <p>Color Options</p> */}
                    <div id="color-dark" onClick={()=>dispatch({type:'Dark'})}></div>
                    <div id="color-white" onClick={()=>dispatch({type:'Light'})}></div>
                </div>

        </div>
    )
}

export default Sidebar;
