import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';

import search_icon from "../../assets/navbar/search.gif"
import lang_icon from "../../assets/navbar/language.gif"
import night_icon from "../../assets/navbar/night.gif"
import zoom_icon from "../../assets/navbar/zoom.gif"
import bell_icon from "../../assets/navbar/notfication-bell.gif"
import comment_icon from "../../assets/navbar/comment.gif"
import menu_icon from "../../assets/navbar/menu.gif"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


function Navbar() {

    const {dispatch} = useContext(DarkModeContext)


    return (
        <div id="navbar">
            <div className="wrapper">
                <div id="search">
                    <input type="text" placeholder="Search..." name="" id="search-bar" />
                    <img src={search_icon} className="search-icon" style={{color:'green'}}/>        
                </div>
                <div id="nav-icons">
                    <div className="item">
                        <img src={lang_icon} className="icon" />
                        <p>English</p>
                    </div>
                    <div className="item">
                        <img src={night_icon} onClick={()=>dispatch({type:'Toggle'})} className="icon" />
                    </div>
                    <div className="item">
                        <img src={zoom_icon} className="icon" />
                    </div>
                    <div className="item">
                        <img src={bell_icon} className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <img src={comment_icon} className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <img src={menu_icon} className="icon" />
                    </div>        
                    <div className="item">
                        {/* <ListIcon className="icon" /> */}
                        <img className="avatar" src="https://media.licdn.com/dms/image/D4D03AQHgZNOg-kI_lw/profile-displayphoto-shrink_800_800/0/1698914788819?e=1718236800&v=beta&t=xmhma7iYBVYtyg2MUHgOo__PzRHjOqjOe301YmpbbtE" alt="profile_pic" />
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default Navbar;