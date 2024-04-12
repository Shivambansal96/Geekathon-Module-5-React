import './Widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import user2_icon from "../../assets/Widgets/employee.gif"
import order2_icon from "../../assets/Widgets/phone-call.gif"
import earning_icon from "../../assets/Widgets/money.gif"
import wallet_icon from "../../assets/Widgets/wallet.gif"
import { Link } from 'react-router-dom';


    
function Widget({type, props}) {

    let data;

    // console.log(type)

    switch(type) {
        case "user": 
        data = {    
            title: "USERS",
            isMoney: false,
            amountNumber: 10,
            link: "See all users",
            state: 'positive',
            stateIcon: <KeyboardArrowUpIcon />,
            diffNumber: 20, 
            icon: <img src={user2_icon} className='icon' 
            style={{
                // color:'red',
                // backgroundColor:'rgb(140,0,0)'    
            }}/>

        };
        // console.log(type);
        break;
        
        case "order":
        data = {
            title: "ORDERS",
            isMoney: false,
            amountNumber: 124,
            link: "View all orders",
            state: 'negative',
            stateIcon: <KeyboardArrowDownIcon />,
            diffNumber: 3,
            icon: <img src={order2_icon} className='icon'
            style={{
                // color:'lightyello',
                // backgroundColor:'yellow'    
            }}/>
        };
        break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                amountNumber: 864,
                link: "View Net Earnings",
                state: 'positive',
                stateIcon: <KeyboardArrowUpIcon />,
                diffNumber: 49,
                icon: <img src={earning_icon} className='icon'
            style={{
                // color:'darkgreen',
                // backgroundColor:'lightgreen'    
            }}/>
        };
        break;
    
        case "balance":
        data = {
            title: "BALANCE",
            isMoney: true,
            state: 'positive',
            amountNumber: 213,
            stateIcon: <KeyboardArrowUpIcon />,
            link: "See Details",
            diffNumber: 7,
            icon: <img src={wallet_icon} className='icon'
            style={{
                // color:'purple',
                // backgroundColor:'black'    
            }}/>
        };
        break;
        
        default:
            break;
            
    }

    return(
        <div id="widget">
            {/* Widget */}
            <div className="left">  
                <span className="title">{data.title}</span>
                {/* <span className='title'>ok</span> */}
                <span className="counter">
                    {/* {data.isMoney } */}
                    {data.isMoney && '$'} {data.amountNumber}
                    </span>
                {/* <span className="link">1fd1ac</span> */}
            <Link to='/users' style={{textDecoration: 'none'}}>
                <span className="link">{data.link}</span>
            </Link>
            </div>
            <div className="right">
                <div className={`percentage ${data.state} `}>
                    {/* <KeyboardArrowUpIcon />  */}
                    {data.stateIcon}
                    <span>{data.diffNumber}&nbsp;%</span>
                </div>
                {/* <PersonOutlinedIcon className="icon" /> */}
                <div id='widget-icon'>
                    {data.icon}
                    {/* <img src='' alt={data.icon} /> */}
                </div>
            </div>
        </div>
    )
}

export default Widget;