import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
function sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow selected  Icon={HomeIcon} title="Home"/>
           <SidebarRow Icon={WhatshotIcon} title="Trending"/>
           <SidebarRow Icon={SubscriptionsIcon} title="Subscrptions"/>
           <hr />
          </div> 
    )
}

export default sidebar
