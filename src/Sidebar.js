import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from "@material-ui/icons/Home"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import SearchIcon from "@material-ui/icons/Search"

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />
            
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption text=""/>
            <SidebarOption text=""/>
            <SidebarOption text=""/>
            
            {/* Tweet button */}
            
        </div>
    )
}

export default Sidebar
