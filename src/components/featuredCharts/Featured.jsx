import "./Featured.css"
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
// import "react-circular-progressbar/dist/style.css"
import info from "../../assets/Total-Revenue/info.gif"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




function Featured() {
    return(
        <div id="featured">
            {/* Featured-Chart */}

            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <img src={info} className="icon" />
            </div>
            <div className="bottom">
                <div className="featured-chart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={8} className="progressBar" />                    
                </div>
                <p className="title">Total Sales Made Today</p>
                <p className="amount">$ 420</p>
                <p className="description">Previous transaction pending. Last payments may not be included.</p>
                
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                            <KeyboardArrowDownIcon className="icon negative" />
                            <div className="resultAmount negative">$12.4k</div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon className="icon positive" />
                            <div className="resultAmount positive">$12.4k</div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult">
                            <KeyboardArrowUpIcon className="icon positive" />
                            <div className="resultAmount positive">$12.4k</div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Featured;