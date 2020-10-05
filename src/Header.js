import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
function Header() {
    const[inputSearch,setInputSearch]=useState('');
    return (
        <div className="header">
        <div className="header_left">
        <MenuIcon />
            <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="YouTube Logo"/>
        </div>
           <div className="header_input">
           <input onChange={(e)=>setInputSearch(e.target.value)}value={inputSearch} placeholder="Search" type="text"/>
           <SearchIcon  className="header_inputButton"/>
           </div>
           <div className="header_icons">
           <VideoCallIcon className="header_icon" />
            <AppIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <Avatar
          alt="johnny"
          src="https://cdn.telanganatoday.com/wp-content/uploads/2019/09/Johnny-Sins-471x400.jpg"
        />
            </div>
        </div>
    )
}

export default Header;
