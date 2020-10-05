import React from 'react';
import './Sidebar.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SidebarRow';
function sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow selected  Icon={HomeIcon} title="Home"/>
           <SidebarRow Icon={WhatshotIcon} title="Trending"/>
           <SidebarRow Icon={SubscriptionsIcon} title="Subscrptions"/>
           <hr />
           <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icon={HistoryIcon} title="History"/>
          <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
           <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
           <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
          </div> 
    )
}

export default sidebar
