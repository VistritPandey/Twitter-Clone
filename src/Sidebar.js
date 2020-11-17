import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter'

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />
            <SidebarOption />
            
            {/* Tweet button */}
            
        </div>
    )
}

export default Sidebar
