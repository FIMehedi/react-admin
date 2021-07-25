import React from 'react';
import './TopBar.css';
import { NotificationsNone, Settings, Language } from '@material-ui/icons';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="logoArea">
                    <span className="logo">React Admin</span>
                </div>
                <div className="iconArea">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <div className="topIconBadge">20</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <div className="topIconBadge lang">EN</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="profileAvatar">
                        <img src="https://avatars2.githubusercontent.com/u/1814079?v=3&s=460" alt="Profile Avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;