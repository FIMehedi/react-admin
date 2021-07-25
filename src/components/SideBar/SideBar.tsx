import React from 'react';
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink active" to="/#home">
                                <LineStyle className="sidebarIcon" /> Home
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <a className="sidebarListLink" href="/#analytics">
                                <Timeline className="sidebarIcon" /> Analytics
                            </a>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/#sales">
                                <TrendingUp className="sidebarIcon" /> Sales
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink active" to="/users">
                                <PermIdentity className="sidebarIcon" /> Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/products">
                                <Storefront className="sidebarIcon" /> Products
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/sales">
                                <AttachMoney className="sidebarIcon" /> Transitions
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/sales">
                                <BarChart className="sidebarIcon" /> Reports
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink active" to="/users">
                                <PermIdentity className="sidebarIcon" /> Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/analytics">
                                <MailOutline className="sidebarIcon" /> Mail
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/sales">
                                <DynamicFeed className="sidebarIcon" /> Feedback
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/sales">
                                <ChatBubbleOutline className="sidebarIcon" /> Messages
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink active" to="/users">
                                <WorkOutline className="sidebarIcon" /> Manage
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/sales">
                                <Timeline className="sidebarIcon" /> Analytics
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarListLink" to="/sales">
                                <BarChart className="sidebarIcon" /> Reports
                            </Link>
                        </li>
                    </ul>
                </div>



            </div>
        </div>
    );
};

export default SideBar;